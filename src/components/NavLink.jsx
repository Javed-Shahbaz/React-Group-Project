import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assests/planet.svg';
import './NavLink.css';

const NavLink = () => (
 <>
    <div className="Nav">
      <div className="logo-container">
        <img src={planet} alt="logo" className="logo"></img>
        <Link to ="/" className="logo-title">Space Traveler's Hub</Link>
      </div>
      <ul className="links">
        <li>
          <Link to ="/Rockets" className="link">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions" className="link">Missions</Link>
        </li>
        |
        <li>
          <Link to ="/Profile" className="link">My Profile</Link>
        </li>
      </ul>
    </div>
    <hr />
 </>
);

export default NavLink;
