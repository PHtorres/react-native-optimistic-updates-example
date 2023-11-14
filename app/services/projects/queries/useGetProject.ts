import {useQuery} from '@tanstack/react-query';
import {projectsQueryKeys} from '../queryKeys';
import {projectsRequests} from '../../api/todoist/requests/projects';

export const useGetProject = (projectId: string) => {
  return useQuery({
    queryKey: projectsQueryKeys.getProject(projectId),
    queryFn: () => projectsRequests.getProject(projectId),
  });
};
