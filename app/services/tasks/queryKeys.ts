import {createQueryKey} from '../shared/queryKeys';

export const tasksQueryKeys = {
  getActiveTasks: (projectId: string) => createQueryKey('tasks', projectId),
};
