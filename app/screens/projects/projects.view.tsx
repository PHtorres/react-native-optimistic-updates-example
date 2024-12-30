import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Screen} from '../../components/screen';
import {ProjectsViewProps} from './types';
import {Heading} from '../../components/Text';
import {GhostButton} from '../../components/GhostButton';
import {ProjectCard} from '../../components/project-card';
import {spacing} from '../../theme/spacing';

export const ProjectsView = ({
  projects,
  isLoadingProjects,
  onNewProject,
  onProjectCardPressed,
}: ProjectsViewProps) => {
  if (isLoadingProjects) return <ActivityIndicator />;
  return (
    <Screen>
      <View style={styles.header}>
        <Heading>Projects</Heading>
        <GhostButton onPress={onNewProject}>Create new project</GhostButton>
      </View>
      <FlatList
        data={projects}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        columnWrapperStyle={{gap: spacing.md}}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProjectCard project={item} onPress={onProjectCardPressed} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.xl,
  },
});
