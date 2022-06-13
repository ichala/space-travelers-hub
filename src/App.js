import {
  Routes,
  Route,
} from 'react-router-dom';
import logo from './images/logo.png';

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img className="logo-header" src={logo} alt="logo" />
          <h4>Title</h4>
        </div>
        <div className="links">
          <a className="link" href="/"> Missions</a>
          <a className="link" href="/"> Dragons</a>
          <a className="link" href="/"> Rockets</a>
          {' '}
          |
          <a className="link" href="/"> Profile</a>
        </div>
      </nav>
      <hr />
      <div className="content">
        <Routes>
          <Route path="/" element={<>Home</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
