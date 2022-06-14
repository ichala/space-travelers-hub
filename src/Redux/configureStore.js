import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerMission from './Missions/Missions';
import dragonReducer from './Dragon/dragon';
import rocketReducer from './Rocket/rocket';

const allReducers = combineReducers({
  missions: reducerMission,
  dragonReducer,
  rocketReducer,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
