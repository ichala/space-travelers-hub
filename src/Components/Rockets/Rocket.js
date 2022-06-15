import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import Card from './Card';
import './Rocket.css';
import { fetchRocket } from '../../Redux/Rocket/rocket';

function Rocket() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  return (
    <div className="card-container">
      {
        rockets.map((rocket) => (
          <Card
            key={rocket.id}
            rocketList={rocket}
          />

        ))
      }
    </div>
  );
}

export default Rocket;
