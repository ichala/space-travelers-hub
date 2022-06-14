import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { fetchDragon } from '../../Redux/Dragon/dragon';
import './dragon.css';

const DragonPage = () => {
  const dispatch = useDispatch();
  const dragonDetail = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(fetchDragon());
  }, []);
  return (
    <div>
      {dragonDetail.map((dragonDetail) => (
        <div key={dragonDetail.id}>
          <h3>{dragonDetail.name}</h3>
          <p>{dragonDetail.type}</p>
          <div>
            {dragonDetail.flickr_images.map((images) => (<img alt="dragonImg" key={generate()} src={images} />))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonPage;
