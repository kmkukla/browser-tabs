import React from 'react';
import Tab from './Tab';
import { NavLink } from 'react-router-dom';

export default function Header() {
  function isActive({ isActive }) {
    return isActive ? 'is-active' : '';
  }

  return (
    <div className="tabs">
      <Tab>
        <NavLink className={isActive} to="/">
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink className={isActive} to="/about">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink className={isActive} to="/features">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
