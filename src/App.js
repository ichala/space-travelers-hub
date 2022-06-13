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
          <Route path="/" element={<>Home</>} />
          <Route path="/Dragons" element={<>Dragons</>} />
          <Route path="/Rockets" element={<>Home</>} />
          <Route path="/Profile" element={<>Home</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
