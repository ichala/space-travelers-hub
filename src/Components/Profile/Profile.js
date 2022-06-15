import React from 'react';
import Missions from './Missions/Missions';
import './profile.css';
import DragonsProfile from './DragonsProfile/DragonsProfile';

function Profile() {
  return (
    <div className="profile-content">
      <div className="profile-missions">
        <h2 className="profile-title">My Missions</h2>
        <div className="mission-list">
          <Missions />
          <DragonsProfile />
        </div>
      </div>
      <div className="profile-dragons">2</div>
      <div className="profile-rockets">3</div>
    </div>
  );
}

export default Profile;
