const GET = 'GET_MISSIONS';
const MissionAPI = 'https://api.spacexdata.com/v3/missions';
// Api Calls
export const FetchMessions = async () => {
  const response = await fetch(MissionAPI);
  const data = await response.json();
  const resultData = [];
  data.forEach((item) => {
    resultData.push({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
    });
  });
  return resultData;
};

// Reducer
export default function reducerMissions(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export function SetMissions(missions) {
  return { type: GET, payload: missions };
}

export const MissionList = (state) => state.missions;
