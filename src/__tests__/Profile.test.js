import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../Components/Profile/Profile';
import store from '../Redux/configureStore';

describe('Test of Profile Components', () => {
  it('Profile Components Renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
