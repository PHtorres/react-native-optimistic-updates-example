import {useMutation, useQueryClient} from '@tanstack/react-query';
import {projectsQueryKeys} from '../queryKeys';
import {ICreateProject} from '../../api/todoist/interfaces/project';
import {projectsRequests} from '../../api/todoist/requests/projects';

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: ICreateProject) => projectsRequests.createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: projectsQueryKeys.getProjects});
    },
  });

  return mutation;
};
