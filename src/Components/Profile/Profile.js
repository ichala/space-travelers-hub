import React from 'react';
import Missions from './Missions/Missions';
import './profile.css';
import DragonsProfile from './DragonsProfile/DragonsProfile';
import RocketProfile from './Rockets/Rocket';

function Profile() {
  return (
    <div className="profile-content">
      <div className="profile-missions">
        <h2 className="profile-title">My Missions</h2>
        <div className="mission-list">
          <Missions />
        </div>
      </div>
      <div className="profile-dragons">
        <h2 className="profile-title">My Dragons</h2>
        {' '}
        <DragonsProfile />
      </div>
      <div className="profile-rockets">
        <h2 className="profile-title">My Rockets</h2>
        <RocketProfile />
      </div>
    </div>
  );
}

export default Profile;
