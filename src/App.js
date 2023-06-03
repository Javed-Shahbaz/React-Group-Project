import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import NavLink from './components/Navbar/NavLink';
import Missions from './components/pages/Mission/Missions';
import Rockets from './components/Rocket/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/rockets" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
