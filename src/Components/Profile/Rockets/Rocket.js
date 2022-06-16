import React from 'react';
import { useSelector } from 'react-redux';
import './rocketProfile.css';

function RocketProfile() {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="rocket-container">
      <h2>My Rockets</h2>
      <ul className="rocket-list">
        {
          myRockets.length <= 0 ? (
            <div className="rocket-list">
              <li className="no-rocket-title">Rockets</li>
              <li className="no-rocket-text" key={0}>No Rockets available ...</li>
            </div>
          )
            : myRockets.map((items) => <li key={items.id}>{items.rocketName}</li>)
        }
      </ul>
    </div>
  );
}

export default RocketProfile;
