import {TProjectColor} from '../../model/projects/types/project-color';

export type CreateProjectViewProps = {
  onProjectNameTextChange: (text: string) => void;
  projectColors: TProjectColor[];
  onSelectProjectColor: (projectColor: TProjectColor) => void;
  selectedProjectColor?: TProjectColor;
  isCreatingProject: boolean;
  onCreateProjectButtonPressed: () => void;
  isAbleToCreateProject: boolean;
  onCancelButtonPressed: () => void;
  createProjectError?: string;
};
