import {useCallback, useState} from 'react';
import {ITasksRepository} from '../../model/tasks/contracts/tasks-repository';
import {useGetActiveTasks} from '../../model/tasks/use-get-active-tasks';
import {TasksViewProps} from './types';
import {useCreateTask} from '../../model/tasks/use-create-task';
import {useDeleteTask} from '../../model/tasks/use-delete-task';

export const useTasksViewModel = (
  projectName: string,
  projectId: string,
  tasksRepository: ITasksRepository,
): TasksViewProps => {
  const [taskContentText, setTaskContentText] = useState('');

  const {activeTasks, isLoadingActiveTasks} = useGetActiveTasks(projectId, tasksRepository);

  const {createTask, createTaskError} = useCreateTask(tasksRepository);

  const {deleteTask, deleteTaskError} = useDeleteTask(tasksRepository);

  const onTaskContentTextChange = useCallback((text: string) => {
    setTaskContentText(text);
  }, []);

  const onCreateTaskButtonPressed = useCallback(() => {
    setTaskContentText('');
    createTask(taskContentText, projectId);
  }, [taskContentText]);

  const onDeleteTaskButtonPressed = useCallback((taskId: string) => {
    deleteTask(taskId, projectId);
  }, []);

  return {
    tasks: activeTasks,
    isLoadingTasks: isLoadingActiveTasks,
    taskContent: taskContentText,
    onTaskContentTextChange,
    onCreateTaskButtonPressed,
    createTaskError,
    onDeleteTaskButtonPressed,
    deleteTaskError,
    projectName,
  };
};
