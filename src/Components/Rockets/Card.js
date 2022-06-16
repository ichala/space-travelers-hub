import './Card.css';
import { useDispatch } from 'react-redux/es/exports';
import { updateReserveStatus } from '../../Redux/Rocket/rocket';

function Card(props) {
  const prop = props;
  const {
    id, rocketName, images, description, reserved,
  } = prop.rocketList;

  const badgeStyle = {
    display: 'none',
  };

  const dispatch = useDispatch();
  const onReserveRocket = () => {
    dispatch(updateReserveStatus(id));
  };

  return (
    <div className="card-main">
      <div className="card">
        <div className="image">
          <img src={images} alt={`${rocketName} img`} />
        </div>
        <div className="body">
          <div className="title">
            <h3>{rocketName}</h3>
          </div>
          <div className="text">
            <div className="reservation-badge" style={reserved ? null : badgeStyle}>Reserved</div>
            <p>{description}</p>
          </div>
          <div className="buttonDiv">
            { reserved ? <button type="button" className="cancelRocket btnRocket" onClick={onReserveRocket}>Cancel Reservation</button>
              : <button type="button" className="reserveRocket btnRocket" onClick={onReserveRocket}>Reserve Rocket</button> }

          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
