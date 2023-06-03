import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../../assets/planet.svg';
import './NavLink.css';

const NavBar = () => (
  <nav>
    <section className="Nav">
      <div className="logo-header">
        <img className="nav-img" src={planet} alt="planet" />
        <h1 className="nav-header">Space Travelers&apos; Hub</h1>
      </div>
      <div className="component-links">
        <NavLink to="rockets" className="links">
          Rockets
        </NavLink>
        <NavLink to="missions" className="links">
          Missions
        </NavLink>
        |
        <NavLink to="profile" className="links">
          My profile
        </NavLink>
      </div>
    </section>
    <hr />
  </nav>
);

export default NavBar;
