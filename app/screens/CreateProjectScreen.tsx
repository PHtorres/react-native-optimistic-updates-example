import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useCreateProject} from '../services/projects/commands/useCreateProject';
import {projectColors} from '../services/projects/colors';
import {Screen} from '../components/Screen';
import {Error, Heading} from '../components/Text';
import {TextInput} from '../components/TextInput';
import {Button} from '../components/Button';
import {spacing} from '../theme/spacing';
import {ColorTag} from '../components/ColorTag';
import {IProjectColor} from '../services/api/todoist/interfaces/project';
import {useNavigation} from '../hooks/useNavigation';
import {GhostButton} from '../components/GhostButton';

export const CreateProjectScreen = () => {
  const {error, mutateAsync, isPending} = useCreateProject();
  const {goBack} = useNavigation();

  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState<IProjectColor | undefined>(
    undefined,
  );

  const formIsValid = !!name && !!selectedColor;

  const createProject = () => {
    if (formIsValid) {
      mutateAsync(
        {
          name,
          color: selectedColor?.name,
        },
        {
          onSuccess: goBack,
        },
      );
    }
  };

  return (
    <Screen>
      <View style={styles.form}>
        <Heading>New project</Heading>
        <TextInput placeholder="Name" onChangeText={setName} />
        <View style={styles.colorTagsList}>
          {projectColors.map(color => (
            <ColorTag
              key={color.id}
              color={color}
              onSelect={setSelectedColor}
              isSelected={selectedColor?.id === color.id}
            />
          ))}
        </View>
        {isPending ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={createProject} disabled={!formIsValid}>
            Create project
          </Button>
        )}
        <GhostButton onPress={goBack}>Cancel</GhostButton>
        {error && <Error>{error.message}</Error>}
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
