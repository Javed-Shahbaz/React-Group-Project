import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/Navbar/NavBar';
import Rockets from './components/pages/Rocket/Rockets';
import Missions from './components/pages/Mission/Missions';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
