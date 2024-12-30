import {useMutation, useQueryClient} from '@tanstack/react-query';
import {tasksQueryKeys} from './queryKeys';
import {TDeleteTaskParams} from './types/delete-task-params';
import {ITasksRepository} from './contracts/tasks-repository';
import {TTask} from './types/task';

export const useDeleteTask = (tasksRepository: ITasksRepository) => {
  const queryClient = useQueryClient();
  const {mutateAsync, error} = useMutation({
    mutationFn: ({taskId}: TDeleteTaskParams) => tasksRepository.deleteTask(taskId),
    // When mutate is called:
    onMutate: async ({taskId, projectId}) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: tasksQueryKeys.getActiveTasks(projectId),
      });

      // Snapshot the previous tasks list
      const previousTasks = queryClient.getQueryData<TTask[]>(
        tasksQueryKeys.getActiveTasks(projectId),
      );

      //remove the task from the previous tasks list
      const updatedTasks = previousTasks?.filter(item => item.id !== taskId);

      // Optimistically update to the new tasks list
      queryClient.setQueryData(tasksQueryKeys.getActiveTasks(projectId), updatedTasks);

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
    deleteTaskError: error?.message,
  };
};
