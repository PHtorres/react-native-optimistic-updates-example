export const endpoints = {
  getProject: (projectId: string) => `v2/projects/${projectId}`,
  getProjects: 'v2/projects',
  createProject: 'v2/projects',
  tasks: 'v2/tasks',
  closeTask: (taskId: string) => `v2/tasks/${taskId}/close`,
  deleteTask: (taskId: string) => `v2/tasks/${taskId}`,
};
