import React from 'react';
// import { useSelector } from 'react-redux';
import './missons.css';

function Missions() {
//   const missions = useSelector((state) => state.missions);
  return (
    <>
      <div className="table-container">
        <table className="zebra">
          <thead>
            <tr>
              <th className="table-title">Missions</th>
              <th className="table-description">Description</th>
              <th className="table-status">Status</th>
              <th className="table-action">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-title">Title</td>
              <td className="table-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </td>
              <td className="table-status">
                <kbd className="joined_mission">Active Member</kbd>
              </td>
              <td className="table-action">
                <button className="leave_mission" type="button">Leave Mission</button>
              </td>
            </tr>
            <tr>
              <td className="table-title">Title</td>
              <td className="table-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </td>
              <td className="table-status">
                <kbd className="not_joined_mission">Not A Member</kbd>
              </td>
              <td className="table-action">
                <button className="join_mission" type="button">Join Mission</button>
              </td>
            </tr>
            <tr>
              <td className="table-title">Title</td>
              <td className="table-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </td>
              <td className="table-status">
                <kbd className="joined_mission">Active Member</kbd>
              </td>
              <td className="table-action">
                <button className="leave_mission" type="button">Leave Mission</button>
              </td>
            </tr>
            <tr>
              <td className="table-title">Title</td>
              <td className="table-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </td>
              <td className="table-status">
                <kbd className="not_joined_mission">Not A Member</kbd>
              </td>
              <td className="table-action">
                <button className="join_mission" type="button">Join Mission</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Missions;
