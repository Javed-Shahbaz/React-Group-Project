import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Rockets from './components/Rocket/Rocket';
import NavLink from './components/NavLink';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/Rockets" element={<Rockets />} />
          <Route path="/" element={<Navigate to="/Rockets" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
