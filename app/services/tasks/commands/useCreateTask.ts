import {useMutation, useQueryClient} from '@tanstack/react-query';
import {tasksQueryKeys} from '../queryKeys';
import {ICreateTask, ITask} from '../../api/todoist/interfaces/task';
import {tasksRequests} from '../../api/todoist/requests/tasks';
import {useState} from 'react';

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const [taskContent, setTaskContent] = useState('');

  const {mutateAsync, error} = useMutation({
    mutationFn: (data: ICreateTask) => tasksRequests.createTask(data),
    // When mutate is called:
    onMutate: async data => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: tasksQueryKeys.getActiveTasks(data.project_id),
      });

      // Snapshot the previous tasks list
      const previousTasks =
        queryClient.getQueryData<ITask[]>(
          tasksQueryKeys.getActiveTasks(data.project_id),
        ) ?? [];

      //add the new task with the previous tasks list to a new list
      const updatedTasks = [
        {id: 'new-task', ...data},
        ...previousTasks,
      ] as ITask[];

      // Optimistically update to the new tasks list
      queryClient.setQueryData(
        tasksQueryKeys.getActiveTasks(data.project_id),
        updatedTasks,
      );

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

  const createTask = (projectId: string) => {
    setTaskContent('');

    const previousTasks =
      queryClient.getQueryData<ITask[]>(
        tasksQueryKeys.getActiveTasks(projectId),
      ) ?? [];

    mutateAsync({
      content: taskContent,
      project_id: projectId,
      order: previousTasks.length,
    });
  };

  return {
    createTask,
    setTaskContent,
    taskContent,
    createTaskError: error,
  };
};
