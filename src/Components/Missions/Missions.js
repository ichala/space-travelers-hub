import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { JoinMission, LeaveMission } from '../../Redux/Missions/Missions';
import './missons.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <div className="table-container">
        <table className="zebra">
          <thead>
            <tr>
              <th className="table-title">Missions</th>
              <th className="table-description">Description</th>
              <th className="table-status">Status</th>
              <th className="table-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (

              <tr key={mission.name}>
                <td className="table-title">{mission.name}</td>
                <td className="table-description">
                  {mission.description}
                </td>
                <td className="table-status">
                  {mission.reserved ? (<kbd className="joined_mission">Active Member</kbd>) : (<kbd className="not_joined_mission">Not A Member</kbd>)}
                </td>
                <td className="table-action">
                  {mission.reserved ? (<button onClick={() => dispatch(LeaveMission(mission.id))} className="leave_mission" type="button">Leave Mission</button>) : (<button onClick={() => dispatch(JoinMission(mission.id))} className="join_mission" type="button">Join Mission</button>)}

                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Missions;
