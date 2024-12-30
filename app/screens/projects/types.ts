import {TProject} from '../../model/projects/types/project';

export type ProjectsViewProps = {
  projects: TProject[] | undefined;
  isLoadingProjects: boolean;
  onProjectCardPressed: (project: TProject) => void;
  onNewProject: () => void;
};
