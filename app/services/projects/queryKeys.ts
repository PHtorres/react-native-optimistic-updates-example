import {createQueryKey} from '../shared/queryKeys';

export const projectsQueryKeys = {
  getProjects: createQueryKey('projects'),
  getProject: (id: string) => createQueryKey('project', id),
};
