import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {Heading} from './Text';
import {TProject} from '../model/projects/types/project';
import {getColorHexByColorName} from '../model/projects/project-colors';

type ProjectCardProps = {
  project: TProject;
  onPress: (project: TProject) => void;
};

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
