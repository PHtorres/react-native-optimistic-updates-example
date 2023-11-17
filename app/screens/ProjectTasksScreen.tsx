import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useGetActiveTasks} from '../services/tasks/queries/useGetActiveTasks';
import {Screen} from '../components/Screen';
import {TaskRow} from '../components/TaskRow';
import {Heading, Error} from '../components/Text';
import {Button} from '../components/Button';
import {spacing} from '../theme/spacing';
import {TextInput} from '../components/TextInput';
import {useCreateTask} from '../services/tasks/commands/useCreateTask';
import {useDeleteTask} from '../services/tasks/commands/useDeleteTask';

type ProfileScreenRouteProp = RouteProp<
  AppStackParamList,
  'ProjectTasksScreen'
>;

export const ProjectTasksScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();

  const {data: tasksList, isLoading: isLoadingTasks} = useGetActiveTasks(
    route.params.projectId,
  );

  const {createTask, setTaskContent, taskContent, createTaskError} =
    useCreateTask();
  const {deleteTask, deleteTaskError} = useDeleteTask();

  return (
    <Screen>
      <View style={styles.header}>
        <Heading>{route.params.projectName}</Heading>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Add new task"
          onChangeText={setTaskContent}
          style={{flex: 1}}
          value={taskContent}
        />
        <Button onPress={() => createTask(route.params.projectId)}>Add</Button>
      </View>
      {isLoadingTasks && <ActivityIndicator />}
      {createTaskError && <Error>{createTaskError.message}</Error>}
      {deleteTaskError && <Error>{deleteTaskError.message}</Error>}
      <FlatList
        data={tasksList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        contentContainerStyle={{marginTop: spacing.xxl}}
        renderItem={({item}) => (
          <TaskRow
            taskId={item.id}
            taskContent={item.content}
            onDelete={() => deleteTask(item.id, route.params.projectId)}
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
