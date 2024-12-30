import {useProjectsViewModel} from './projects.view.model';
import {ProjectsView} from './projects.view';
import {appContainer} from '../../containers/app-container';

export const ProjectsScreen = () => {
  const projectsViewProps = useProjectsViewModel(appContainer.projectsRepository);

  return <ProjectsView {...projectsViewProps} />;
};
