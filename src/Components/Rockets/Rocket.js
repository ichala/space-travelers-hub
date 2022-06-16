import { useSelector } from 'react-redux';
import Card from './Card';
import './Rocket.css';

function Rocket() {
  const rockets = useSelector((state) => state.rockets);

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
