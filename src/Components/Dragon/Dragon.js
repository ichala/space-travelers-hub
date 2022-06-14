import React from 'react';
import { useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import './dragon.css';

const DragonPage = () => {
  const dragonDetail = useSelector((state) => state.dragonReducer);
  return (
    <div>
      {dragonDetail.map((dragonDetail) => (
        <div key={dragonDetail.id} className="dragonPage">
          <h3>{dragonDetail.name}</h3>
          <p>{dragonDetail.type}</p>
          <div className="dragon">
            {dragonDetail.flickr_images.map((images) => (<img alt="dragonImg" key={generate()} src={images} />))}
            <button type="button">reserve dragon</button>
            <button type="button">cancel reservation </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonPage;
