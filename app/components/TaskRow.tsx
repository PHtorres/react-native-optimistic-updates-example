import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {spacing} from '../theme/spacing';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

interface TaskRowProps {
  taskId: string;
  taskContent: string;
  onDelete: (taskId: string) => void;
}

export const TaskRow = ({taskId, taskContent, onDelete}: TaskRowProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{taskContent}</Text>
        <TouchableOpacity
          onPress={() => onDelete(taskId)}
          hitSlop={{right: 15, left: 15}}
          disabled={taskId === 'new-task'}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.xl,
    borderRadius: spacing.sm,
    backgroundColor: colors.contrastBackground,
  },
  text: {
    fontSize: fonts.md,
    fontWeight: '500',
    color: colors.body,
  },
  deleteText: {
    fontSize: fonts.md,
    color: colors.danger,
  },
});
