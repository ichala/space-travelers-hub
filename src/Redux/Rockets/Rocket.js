import axios from 'axios';

// action types
const GET_DATA = 'space-travelers-hub/rockets/rockets';
const url = 'https://api.spacexdata.com/v3/rockets';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchRocket = () => async () => {
  const response = await axios.get(url);
  const data = await response.data;
  // const rocket= [];

  console.log(data[1]);
};

export default function rocketReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
