import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
