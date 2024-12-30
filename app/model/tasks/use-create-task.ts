import {useMutation, useQueryClient} from '@tanstack/react-query';
import {tasksQueryKeys} from './queryKeys';
import {TTask} from './types/task';
import {ITasksRepository} from './contracts/tasks-repository';
import {TCreateTaskParams} from './types/create-task-params';

export const useCreateTask = (tasksRepository: ITasksRepository) => {
  const queryClient = useQueryClient();

  const {mutateAsync, error} = useMutation({
    mutationFn: (data: TCreateTaskParams) => tasksRepository.createTask(data),
    // When mutate is called:
    onMutate: async data => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: tasksQueryKeys.getActiveTasks(data.project_id),
      });

      // Snapshot the previous tasks list
      const previousTasks =
        queryClient.getQueryData<TTask[]>(tasksQueryKeys.getActiveTasks(data.project_id)) ?? [];

      //add the new task with the previous tasks list to a new list
      const updatedTasks = [{id: 'new-task', ...data}, ...previousTasks] as TTask[];

      // Optimistically update to the new tasks list
      queryClient.setQueryData(tasksQueryKeys.getActiveTasks(data.project_id), updatedTasks);

      // Return a context with the previous tasks list
      return {previousTasks};
    },
    // If the mutation fails, use the context we returned above
    onError: (_, variables, context) => {
      queryClient.setQueryData(
        tasksQueryKeys.getActiveTasks(variables.project_id),
        context?.previousTasks,
      );
    },
    // Always refetch after error or success:
    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: tasksQueryKeys.getActiveTasks(variables.project_id),
      });
    },
  });

  const createTask = (content: string, projectId: string) => {
    const previousTasks =
      queryClient.getQueryData<TTask[]>(tasksQueryKeys.getActiveTasks(projectId)) ?? [];

    mutateAsync({
      content,
      project_id: projectId,
      order: previousTasks.length,
    });
  };

  return {
    createTask,
    createTaskError: error?.message,
  };
};
