import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import NavLink from './components/NavLink';
import Rockets from './components/rocket';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/" element={<Navigate to="/rockets" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
