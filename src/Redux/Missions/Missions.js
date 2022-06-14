const GET = 'GET_MISSIONS';
const JOIN = 'JOIN_MISSION';
const MissionAPI = 'https://api.spacexdata.com/v3/missions';
let newState = [];
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
      reserved: false,
    });
  });
  return resultData;
};

// Reducer
export default function reducerMissions(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.payload;
    case JOIN:
      newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    default: return state;
  }
}

// Action Creators
export function SetMissions(missions) {
  return { type: GET, payload: missions };
}

export function JoinMission(id) {
  return { type: JOIN, payload: id };
}

export const MissionList = (state) => state.missions;
