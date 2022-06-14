import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerMission from './Missions/Missions';
import rocketReducer from './Rockets/Rocket';

const allReducers = combineReducers({
  missions: reducerMission,
  rockets: rocketReducer,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
