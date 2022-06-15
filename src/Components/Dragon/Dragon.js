import React from 'react';
// import PropTypes from 'prop-types';
// import { generate } from 'randomized-string';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon } from '../../Redux/Dragon/dragon';
import './dragon.css';

const DragonPage = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);

  const dispatch = useDispatch();
  const reserve = (id) => {
    dispatch(reserveDragon(id));
  };

  return (
    <div>
      {dragonsList.map((dragonDetail) => (
        <div key={dragonDetail.id} className="dragonPage">
          <div className="dragon"><img src={dragonDetail.flickr_images} alt="dragon" /></div>
          <div className="dragonContent">
            <h3>{dragonDetail.name}</h3>
            <button className="reserve-btn" onClick={() => reserve(dragonDetail.id)} type="button">Reserve dragon</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonPage;
