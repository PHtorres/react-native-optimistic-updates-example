import {useMutation, useQueryClient} from '@tanstack/react-query';
import {projectsQueryKeys} from '../queryKeys';
import {ICreateProject} from '../../api/todoist/interfaces/project';
import {projectsRequests} from '../../api/todoist/requests/projects';

const queryClient = useQueryClient();

export const useCreateProject = () => {
  const mutation = useMutation({
    mutationFn: (data: ICreateProject) => projectsRequests.createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: projectsQueryKeys.getProjects});
    },
  });

  return mutation;
};
