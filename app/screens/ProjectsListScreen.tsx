import {useGetProjects} from '../services/projects/queries/useGetProjects';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Screen} from '../components/Screen';
import {Heading} from '../components/Text';
import {ProjectCard} from '../components/ProjectCard';
import {spacing} from '../theme/spacing';
import {useNavigation} from '../hooks/useNavigation';
import {GhostButton} from '../components/GhostButton';

export const ProjectsListScreen = () => {
  const {navigate} = useNavigation();
  const {data, isLoading} = useGetProjects();

  if (isLoading) return <ActivityIndicator />;

  return (
    <Screen>
      <View style={styles.header}>
        <Heading>Projects</Heading>
        <GhostButton onPress={() => navigate('CreateProjectScreen')}>
          Create new project
        </GhostButton>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        columnWrapperStyle={{gap: spacing.md}}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProjectCard
            project={item}
            onPress={project =>
              navigate('ProjectTasksScreen', {
                projectId: project.id,
                projectName: project.name,
              })
            }
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
});
