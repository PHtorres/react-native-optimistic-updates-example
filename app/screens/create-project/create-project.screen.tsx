import {appContainer} from '../../containers/app-container';
import {CreateProjectView} from './create-project.view';
import {useCreateProjectViewModel} from './create-project.view.model';

export const CreateProjectScreen = () => {
  const createProjectViewProps = useCreateProjectViewModel(appContainer.projectsRepository);

  return <CreateProjectView {...createProjectViewProps} />;
};
