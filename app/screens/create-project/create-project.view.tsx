import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {ColorTag} from '../../components/ColorTag';
import {GhostButton} from '../../components/GhostButton';
import {Screen} from '../../components/screen';
import {Error, Heading} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {spacing} from '../../theme/spacing';
import {CreateProjectViewProps} from './types';

export const CreateProjectView = ({
  onProjectNameTextChange,
  projectColors,
  onSelectProjectColor,
  selectedProjectColor,
  isCreatingProject,
  onCreateProjectButtonPressed,
  isAbleToCreateProject,
  onCancelButtonPressed,
  createProjectError,
}: CreateProjectViewProps) => {
  return (
    <Screen>
      <View style={styles.form}>
        <Heading>New project</Heading>
        <TextInput placeholder="Name" onChangeText={onProjectNameTextChange} />
        <View style={styles.colorTagsList}>
          {projectColors.map(color => (
            <ColorTag
              key={color.id}
              color={color}
              onSelect={onSelectProjectColor}
              isSelected={selectedProjectColor?.id === color.id}
            />
          ))}
        </View>
        {isCreatingProject ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={onCreateProjectButtonPressed} disabled={!isAbleToCreateProject}>
            Create project
          </Button>
        )}
        <GhostButton onPress={onCancelButtonPressed}>Cancel</GhostButton>
        {createProjectError && <Error>{createProjectError}</Error>}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing.xxl,
  },
  colorTagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
});
