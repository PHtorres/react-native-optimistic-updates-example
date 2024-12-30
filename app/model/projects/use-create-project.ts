import {useMutation, useQueryClient} from '@tanstack/react-query';
import {IProjectRepository} from './contracts/project-repository';
import {projectsQueryKeys} from './queryKeys';
import {TCreateProjectParams} from './types/create-project-params';

export const useCreateProject = (projectRepository: IProjectRepository) => {
  const queryClient = useQueryClient();
  const {mutate, isPending, error} = useMutation({
    mutationFn: projectRepository.createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: projectsQueryKeys.getProjects});
    },
  });

  return {
    crateProject: mutate,
    isCreatingProject: isPending,
    createProjectError: error?.message,
  };
};
