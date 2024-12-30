import {useCallback, useMemo, useState} from 'react';
import {IProjectRepository} from '../../model/projects/contracts/project-repository';
import {projectColors} from '../../model/projects/project-colors';
import {TProjectColor} from '../../model/projects/types/project-color';
import {useCreateProject} from '../../model/projects/use-create-project';
import {useNavigation} from '../../routes/use-navigation';
import {CreateProjectViewProps} from './types';

export const useCreateProjectViewModel = (
  projectRepository: IProjectRepository,
): CreateProjectViewProps => {
  const {goBack} = useNavigation();

  const {crateProject, isCreatingProject, createProjectError} = useCreateProject(projectRepository);

  const [projectName, setProjectName] = useState('');
  const [selectedProjectColor, setSelectedProjectColor] = useState<TProjectColor | undefined>(
    undefined,
  );

  const onProjectNameTextChange = useCallback((text: string) => {
    setProjectName(text);
  }, []);

  const onSelectProjectColor = useCallback((projectColor: TProjectColor) => {
    setSelectedProjectColor(projectColor);
  }, []);

  const isAbleToCreateProject = useMemo(
    () => !!projectName && !!selectedProjectColor,
    [projectName, selectedProjectColor],
  );

  const onCreateProjectButtonPressed = useCallback(() => {
    if (isAbleToCreateProject) {
      crateProject({
        color: selectedProjectColor!.name,
        name: projectName,
      });
      goBack();
    }
  }, [selectedProjectColor, projectName]);

  const onCancelButtonPressed = useCallback(goBack, []);

  return {
    isAbleToCreateProject,
    selectedProjectColor,
    isCreatingProject,
    onCancelButtonPressed,
    onCreateProjectButtonPressed,
    onProjectNameTextChange,
    onSelectProjectColor,
    projectColors,
    createProjectError,
  };
};
