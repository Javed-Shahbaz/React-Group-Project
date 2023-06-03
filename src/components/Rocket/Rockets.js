import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReserved, fetchData, reservedRocket } from '../../redux/Rockets/RocketSlice';

import './Rocket.css';

function Rockets() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="rock-container">
      {status && <div>Loading....</div>}
      {data && data.map((rocket) => (
        <div key={rocket.id} className="mc">
          <img
            className="rocketImg"
            src={rocket.flickr_images}
            alt={rocket.rocket_name}
          />
          <div className="rock-content">
            <h3 className="headr">{rocket.rocket_name}</h3>
            <p className="desc">
              {rocket.reserved && (
                <span className="res-markChanged">Reserved</span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button type="submit" onClick={() => dispatch(cancelReserved(rocket.id))} className="cancel-reserved">Cancel Reservation</button>
            ) : (
              <button
                type="submit"
                className="res"
                onClick={() => dispatch(reservedRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
