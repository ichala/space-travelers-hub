const FETCH_DRAGON = 'spaceTraveler/dragon/FETCH_DRAGON';
const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

const Dragondetail = async () => {
  const request = await fetch(url);
  const dragon = await request.json();
  return dragon;
};

export const fetchDragon = () => async (dispatch) => {
  const detail = await Dragondetail();
  const detailList = detail.map((value) => {
    const {
      id, name, type,
    } = value;
    return {
      id,
      name,
      type,
      flickr_images: value.flickr_images,
    };
  });
  dispatch({
    type: FETCH_DRAGON,
    payload: detailList,
  });
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAGON:
      return [...action.payload];
    default:
      return state;
  }
};

export default dragonReducer;
