import {TTask} from '../../model/tasks/types/task';

export type TasksViewProps = {
  projectName: string;
  tasks?: TTask[];
  onTaskContentTextChange: (text: string) => void;
  taskContent: string;
  onCreateTaskButtonPressed: () => void;
  onDeleteTaskButtonPressed: (taskId: string) => void;
  isLoadingTasks: boolean;
  createTaskError?: string;
  deleteTaskError?: string;
};
