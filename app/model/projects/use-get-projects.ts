import {useQuery} from '@tanstack/react-query';
import {IProjectRepository} from './contracts/project-repository';
import {projectsQueryKeys} from './queryKeys';

export const useGetProjects = (projectRepository: IProjectRepository) => {
  const {data, isLoading} = useQuery({
    queryKey: projectsQueryKeys.getProjects,
    queryFn: projectRepository.getProjects,
  });

  return {
    projects: data,
    isLoadingProjects: isLoading,
  };
};
