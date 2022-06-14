import axios from 'axios';

// action types
const GET_ROCKET = 'space-travelers-hub/rockets/rockets';
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

    Object.entries(data).forEach((el) => {
      rocket.push({
        id: el[1].id,
        images: el[1].flickr_images[1],
        rocketName: el[1].rocket_name,
        description: el[1].description,
        reserved: false,
      });
    });

    dispatch(getRockets(rocket));
  } catch (error) {
    <h2>Error</h2>;
  }
};
