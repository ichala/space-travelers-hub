import React from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.reserved);
  return (
    <table className="zebra">
      <thead>
        <tr>
          <th className="table-title">Missions</th>
        </tr>
      </thead>
      <tbody>
        {filteredMissions.length < 1 && (
        <tr>
          <td className="table-title">No missions available ..</td>
        </tr>
        )}
        {filteredMissions.map((mission) => (
          <>
            <tr>
              <td className="table-title">{mission.name}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
