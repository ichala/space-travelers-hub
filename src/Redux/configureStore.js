import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerMission from './Missions/Missions';
import dragonReducer from './Dragon/dragon';

const allReducers = combineReducers({
  missions: reducerMission,
  dragonReducer,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
