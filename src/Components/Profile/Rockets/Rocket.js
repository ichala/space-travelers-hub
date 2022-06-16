import React from 'react';
import { useSelector } from 'react-redux';
import './rocketProfile.css';

function RocketProfile() {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);

  return (

    <table className="zebra">
      <thead>
        <tr>
          <th className="table-title">Rockets</th>
        </tr>
      </thead>
      <tbody>
        {myRockets.length < 1 && (
        <tr>
          <td className="table-title">No missions available ..</td>
        </tr>
        )}
        {myRockets.map((items) => (
          <div key={items.rocketName}>
            <tr>
              <td className="table-title">{items.rocketName}</td>
            </tr>
          </div>
        ))}
      </tbody>
    </table>
  // <div className="rocket-container">
  //   <h2>My Rockets</h2>
  //   <ul className="rocket-list">
  //     {
  //       myRockets.length <= 0 ? (
  //         <div className="rocket-list">
  //           <li className="no-rocket-title">Rockets</li>
  //           <li className="no-rocket-text" key={0}>No Rockets available ...</li>
  //         </div>
  //       )
  //         : myRockets.map((items) => <li key={items.id}>{items.rocketName}</li>)
  //     }
  //   </ul>
  // </div>
  );
}

export default RocketProfile;
