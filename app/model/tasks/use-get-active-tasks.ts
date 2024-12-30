import {useQuery} from '@tanstack/react-query';
import {tasksQueryKeys} from './queryKeys';
import {ITasksRepository} from './contracts/tasks-repository';
import {TTask} from './types/task';

export const useGetActiveTasks = (projectId: string, tasksRepository: ITasksRepository) => {
  const {data, isLoading} = useQuery({
    queryKey: tasksQueryKeys.getActiveTasks(projectId),
    queryFn: () => sortedTasksList(tasksRepository.getActiveTasks(projectId)),
    staleTime: 1000 * 60 * 60, //1hr
  });

  return {
    activeTasks: data,
    isLoadingActiveTasks: isLoading,
  };
};

const sortedTasksList = async (promise: Promise<TTask[] | undefined>) => {
  const tasks = await promise;
  if (tasks) {
    tasks.sort((a, b) => b.order - a.order);
  }

  return tasks;
};
