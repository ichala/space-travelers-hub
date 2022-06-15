import React from 'react';
import { useSelector } from 'react-redux';

const DragonsProfile = () => {
  const dragonDetail = useSelector((state) => state.dragonReducer);
  const reservedDragon = dragonDetail.filter((dragon) => dragon.reserved === true);
  const noReservedDragon = reservedDragon.length === 0;
  return (
    <div>
      <h1>My Dragons</h1>
      <article>
        { noReservedDragon
            && <p>No Dragons Reserved...</p>}
        {reservedDragon.map((dragon) => <p key={dragon.id}>{dragon.name}</p>)}
      </article>
    </div>
  );
};

export default DragonsProfile;
