import {StyleSheet, TouchableOpacity} from 'react-native';
import {IProject} from '../services/api/todoist/interfaces/project';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {Heading} from './Text';
import {getColorHexByColorName} from '../services/projects/colors';

interface ProjectCardProps {
  project: IProject;
  onPress: (project: IProject) => void;
}

export const ProjectCard = ({project, onPress}: ProjectCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(project)}
      style={[
        styles.container,
        {
          backgroundColor: getColorHexByColorName(project.color),
        },
      ]}>
      <Heading>{project.name}</Heading>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: spacing.md,
  },
  text: {
    color: colors.background,
  },
});
