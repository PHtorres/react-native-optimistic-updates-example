import {useMutation, useQueryClient} from '@tanstack/react-query';
import {tasksQueryKeys} from '../queryKeys';
import {ITask} from '../../api/todoist/interfaces/task';
import {tasksRequests} from '../../api/todoist/requests/tasks';
import {IMutationDeleteTask} from '../interfaces/IMutationDeleteTask';

const queryClient = useQueryClient();

export const useDeleteTask = () => {
  const {mutateAsync, error} = useMutation({
    mutationFn: ({taskId}: IMutationDeleteTask) =>
      tasksRequests.deleteTask(taskId),
    // When mutate is called:
    onMutate: async ({taskId, projectId}) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: tasksQueryKeys.getActiveTasks(projectId),
      });

      // Snapshot the previous tasks list
      const previousTasks = queryClient.getQueryData<ITask[]>(
        tasksQueryKeys.getActiveTasks(projectId),
      );

      //remove the task from the previous tasks list
      const updatedTasks = previousTasks?.filter(item => item.id !== taskId);

      // Optimistically update to the new tasks list
      queryClient.setQueryData(
        tasksQueryKeys.getActiveTasks(projectId),
        updatedTasks,
      );

      // Return a context with the previous tasks list
      return {previousTasks};
    },
    // If the mutation fails, use the context we returned above
    onError: (_, variables, context) => {
      queryClient.setQueryData(
        tasksQueryKeys.getActiveTasks(variables.projectId),
        context?.previousTasks,
      );
    },
    // Always refetch after error or success:
    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: tasksQueryKeys.getActiveTasks(variables.projectId),
      });
    },
  });

  const deleteTask = (taskId: string, projectId: string) => {
    mutateAsync({
      taskId,
      projectId,
    });
  };

  return {
    deleteTask,
    deleteTaskError: error,
  };
};
