import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
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
