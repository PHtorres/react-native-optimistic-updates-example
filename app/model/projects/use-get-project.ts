import {useQuery} from '@tanstack/react-query';
import {projectsQueryKeys} from '../queryKeys';
import {IProjectRepository} from '../contracts/project-repository';

export const useGetProject = (
  projectId: string,
  projectRepository: IProjectRepository,
) => {
  const {data, isLoading} = useQuery({
    queryKey: projectsQueryKeys.getProject(projectId),
    queryFn: () => projectRepository.getProject(projectId),
  });

  return {
    project: data,
    isLoadingProject: isLoading,
  };
};
