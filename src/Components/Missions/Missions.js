import React from 'react';
import { useSelector } from 'react-redux';
import './missons.css';

function Missions() {
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
              <>
                <tr>
                  <td className="table-title">{mission.name}</td>
                  <td className="table-description">
                    {mission.description}
                  </td>
                  <td className="table-status">
                    <kbd className="joined_mission">Active Member</kbd>
                  </td>
                  <td className="table-action">
                    <button className="leave_mission" type="button">Leave Mission</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Missions;
