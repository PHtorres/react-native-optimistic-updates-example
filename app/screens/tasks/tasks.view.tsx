import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {TasksViewProps} from './types';
import {spacing} from '../../theme/spacing';
import {Screen} from '../../components/screen';
import {Error, Heading} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {TaskRow} from '../../components/task-row';

export const TasksView = ({
  projectName,
  tasks,
  taskContent,
  onTaskContentTextChange,
  onCreateTaskButtonPressed,
  onDeleteTaskButtonPressed,
  isLoadingTasks,
  createTaskError,
  deleteTaskError,
}: TasksViewProps) => {
  return (
    <Screen>
      <View style={styles.header}>
        <Heading>{projectName}</Heading>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Add new task"
          onChangeText={onTaskContentTextChange}
          style={{flex: 1}}
          value={taskContent}
        />
        <Button onPress={onCreateTaskButtonPressed}>Add</Button>
      </View>
      {isLoadingTasks && <ActivityIndicator />}
      {createTaskError && <Error>{createTaskError}</Error>}
      {deleteTaskError && <Error>{deleteTaskError}</Error>}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        contentContainerStyle={{marginTop: spacing.xxl}}
        renderItem={({item}) => (
          <TaskRow
            taskId={item.id}
            taskContent={item.content}
            onDelete={() => onDeleteTaskButtonPressed(item.id)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.xl,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
});
