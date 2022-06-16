import axios from 'axios';

// action types
const GET_ROCKET = 'space-travelers-hub/rockets/rockets';
const UPDATE_RESERVE_STATUS = 'space-travelers-hub/rockets/updateReserveStatus';
const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = (payload) => ({
  type: GET_ROCKET,
  payload,
});

export const fetchRocket = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const rocket = [];

    data.forEach((el) => {
      rocket.push({
        id: el.id,
        images: el.flickr_images[0],
        rocketName: el.rocket_name,
        description: el.description,
        reserved: false,
      });
    });

    dispatch(getRockets(rocket));
  } catch (error) {
    <h2>Error</h2>;
  }
};

export const updateReserveStatus = (payload) => ({
  type: UPDATE_RESERVE_STATUS,
  payload,
});

export default function rocketReducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload;
    case UPDATE_RESERVE_STATUS:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        const newState = { ...rocket, reserved: !rocket.reserved };
        return newState;
      });
    default:
      return state;
  }
}
