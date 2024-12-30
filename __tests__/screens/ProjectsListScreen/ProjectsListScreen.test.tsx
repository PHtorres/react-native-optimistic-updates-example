import {AppStack} from '../../../app/routes/app-stack';
import {projectsRequests} from '../../../app/services/api/todoist/requests/projects';
import {render, waitFor, userEvent} from '../../utils/test-utils';
import {mockProjectsList} from './mocks';

const getProjectsSpy = jest
  .spyOn(projectsRequests, 'getProjects')
  .mockResolvedValue(mockProjectsList);

const user = userEvent.setup();
describe('<ProjectsListScreen/>', () => {
  it('should render the projects list', async () => {
    const {queryByText} = render(<AppStack />);
    await waitFor(() =>
      expect(queryByText(mockProjectsList[0].name)).toBeTruthy(),
    );
    expect(queryByText(mockProjectsList[1].name)).toBeTruthy(),
      expect(getProjectsSpy).toHaveBeenCalledTimes(1);
  });

  it('should be able to navigate to the Create new project screen', async () => {
    const {queryByText, getByText} = render(<AppStack />);
    await waitFor(() => expect(queryByText('Create new project')).toBeTruthy());
    await user.press(getByText('Create new project'));
    expect(queryByText('New project')).toBeTruthy();
    expect(queryByText('Create project')).toBeTruthy();
    expect(queryByText('Cancel')).toBeTruthy();
  });
});
