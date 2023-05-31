import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Missions from './Pages/Missions';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes>
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
