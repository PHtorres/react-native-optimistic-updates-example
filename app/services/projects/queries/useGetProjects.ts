import {useQuery} from '@tanstack/react-query';
import {projectsQueryKeys} from '../queryKeys';
import {projectsRequests} from '../../api/todoist/requests/projects';

export const useGetProjects = () => {
  return useQuery({
    queryKey: projectsQueryKeys.getProjects,
    queryFn: projectsRequests.getProjects,
  });
};
