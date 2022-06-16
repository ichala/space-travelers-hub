import React from 'react';
import { useSelector } from 'react-redux';

const DragonsProfile = () => {
  const dragonDetail = useSelector((state) => state.dragonReducer);
  const reservedDragon = dragonDetail.filter((dragon) => dragon.reserved === true);
  const noReservedDragon = reservedDragon.length === 0;
  return (

    <table className="zebra">
      <thead>
        <tr>
          <th className="table-title">Dragons</th>
        </tr>
      </thead>
      <tbody>
        {noReservedDragon && (
        <tr>
          <td className="table-title">No Dragons Reserved...</td>
        </tr>
        )}
        {reservedDragon.map((dragon) => (
          <div key={dragon.name}>
            <tr>
              <td className="table-title">{dragon.name}</td>
            </tr>
          </div>
        ))}
      </tbody>
    </table>
  );
};

export default DragonsProfile;
