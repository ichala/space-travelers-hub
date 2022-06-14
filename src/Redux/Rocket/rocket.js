import axios from 'axios';

// action types
const GET_ROCKET = 'space-travelers-hub/rockets/rockets';
const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = (payload) => ({
  type: GET_ROCKET,
  payload,
});

