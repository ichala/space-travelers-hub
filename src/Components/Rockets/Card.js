import React from 'react';
import './Card.css';

function Card(props) {
  const prop = props;
  const {
    rocketName, images, description,
  } = prop.rocketList;
  return (
    <div className="card-main">
      <div className="card">
        <div className="image">
          <img src={images} alt={`${rocketName} img`} />
          {' '}
        </div>
        <div className="body">
          <div className="title">{rocketName}</div>
          <div className="text">
            {description}

          </div>
          <div className="buttonDiv"><button className="btnReserveRocket" type="button">Reserve Rocket</button></div>

        </div>
      </div>
    </div>
  );
}

export default Card;
