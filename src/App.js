import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import Missions from './Components/Missions/Missions';
import { FetchMessions, SetMissions } from './Redux/Missions/Missions';
import Rocket from './Components/Rockets/Rocket';
import DragonPage from './Components/Dragon/Dragon';
import { fetchDragon } from './Redux/Dragon/dragon';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function intitData() {
      const missions = await FetchMessions();
      dispatch(SetMissions(missions));
      dispatch(fetchDragon());
    }
    intitData();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <div className="content">
        <Routes>
          <Route path="/" element={<Missions />} />
          <Route path="/Dragons" element={<DragonPage />} />
          <Route path="/Rockets" element={<Rocket />} />
          <Route path="/Profile" element={<>Profile</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
