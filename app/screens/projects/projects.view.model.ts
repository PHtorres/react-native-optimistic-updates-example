import {IProjectRepository} from '../../model/projects/contracts/project-repository';
import {TProject} from '../../model/projects/types/project';
import {useGetProjects} from '../../model/projects/use-get-projects';
import {useNavigation} from '../../routes/use-navigation';
import {ProjectsViewProps} from './types';

export const useProjectsViewModel = (projectRepository: IProjectRepository): ProjectsViewProps => {
  const {navigate} = useNavigation();

  const {isLoadingProjects, projects} = useGetProjects(projectRepository);

  const onNewProject = () => {
    navigate('CreateProject');
  };

  const onProjectCardPressed = (project: TProject) => {
    navigate('Tasks', {
      projectId: project.id,
      projectName: project.name,
    });
  };

  return {
    projects,
    isLoadingProjects,
    onNewProject,
    onProjectCardPressed,
  };
};
