import {TCreateTaskParams} from '../types/create-task-params';
import {TTask} from '../types/task';

export interface ITasksRepository {
  getActiveTasks: (projectId: string) => Promise<TTask[] | undefined>;
  createTask: (data: TCreateTaskParams) => Promise<TTask | undefined>;
  closeTask: (taskId: string) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
}
