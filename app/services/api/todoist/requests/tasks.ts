import {todoistApi} from '../api';
import {ENDPOINTS} from '../endpoints';
import {ICreateTask, ITask} from '../interfaces/task';

const getActiveTasks = async (projectId: string) => {
  const response = await todoistApi.get<ITask[] | undefined>(ENDPOINTS.tasks, {
    params: {
      project_id: projectId,
    },
  });
  return response.data;
};

const createTask = async (data: ICreateTask) => {
  const response = await todoistApi.post<ITask | undefined>(
    ENDPOINTS.tasks,
    data,
  );
  return response.data;
};

const closeTask = async (taskId: string) => {
  await todoistApi.post(`${ENDPOINTS.tasks}/${taskId}/close`);
};

const deleteTask = async (taskId: string) => {
  await todoistApi.delete(`${ENDPOINTS.tasks}/${taskId}`);
};

export const tasksRequests = {
  getActiveTasks,
  createTask,
  closeTask,
  deleteTask,
};
