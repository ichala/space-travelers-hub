import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon, cancelReserve } from '../../Redux/Dragon/dragon';
import './dragon.css';

const DragonPage = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);

  const dispatch = useDispatch();
  const reserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const cancel = (id) => {
    dispatch(cancelReserve(id));
  };

  return (
    <div>
      {dragonsList.map((dragonDetail) => (
        <div key={dragonDetail.id} className="dragonPage">
          <img className="dragon" src={dragonDetail.flickr_images} alt="dragon" />
          <div cnlassName="dragonContent">
            <h3>{dragonDetail.name}</h3>
            {!dragonDetail.reserved && (<button className="reserve-btn" onClick={() => reserve(dragonDetail.id)} type="button">reserve dragon</button>)}
            {dragonDetail.reserved && (<button className="cancel-btn" onClick={() => cancel(dragonDetail.id)} type="button">cancel reservation</button>)}
            {' '}

          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonPage;
