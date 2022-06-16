import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import DragonPage from '../Components/Dragon/Dragon';

describe('testing the app', () => {
  it('testing DragonPage UI', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DragonPage />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
