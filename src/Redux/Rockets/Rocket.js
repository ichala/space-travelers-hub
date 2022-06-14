import axios from 'axios';

// action types
const GET_DATA = 'space-travelers-hub/rockets/rockets';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export default function rocketReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
