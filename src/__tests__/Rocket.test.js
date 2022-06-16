import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketProfile from '../Components/Profile/Rockets/Rocket';
import store from '../Redux/configureStore';

describe('Test of Profile Components', () => {
  it('Profile Components Renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
