import {appContainer} from '../../containers/app-container';
import {useAppStackParams} from '../../routes/use-app-stack-params';
import {TasksView} from './tasks.view';
import {useTasksViewModel} from './tasks.view.model';

export const TasksScreen = () => {
  const params = useAppStackParams('Tasks');
  const tasksViewProps = useTasksViewModel(
    params.projectName,
    params.projectId,
    appContainer.tasksRepository,
  );

  return <TasksView {...tasksViewProps} />;
};
