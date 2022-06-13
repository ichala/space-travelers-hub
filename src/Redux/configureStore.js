import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerMission from './Missions/Missions';

const allReducers = combineReducers({
  missions: reducerMission,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
