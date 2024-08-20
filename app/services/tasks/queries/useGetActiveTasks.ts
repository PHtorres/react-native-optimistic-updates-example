import {useQuery} from '@tanstack/react-query';
import {tasksQueryKeys} from '../queryKeys';
import {tasksRequests} from '../../api/todoist/requests/tasks';
import {ITask} from '../../api/todoist/interfaces/task';

export const useGetActiveTasks = (projectId: string) => {
  return useQuery({
    queryKey: tasksQueryKeys.getActiveTasks(projectId),
    queryFn: () => sortedTasksList(tasksRequests.getActiveTasks(projectId)),
    staleTime: 1000 * 60 * 60, //1hr
  });
};

const sortedTasksList = async (promise: Promise<ITask[] | undefined>) => {
  const tasks = await promise;
  if (tasks) {
    tasks.sort((a, b) => b.order - a.order);
  }

  return tasks;
};
