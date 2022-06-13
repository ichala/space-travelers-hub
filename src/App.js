import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header />

      <hr />
      <div className="content">
        <Routes>
          <Route path="/" element={<>Missions</>} />
          <Route path="/Dragons" element={<>Dragons</>} />
          <Route path="/Rockets" element={<>Rockets</>} />
          <Route path="/Profile" element={<>Profile</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
