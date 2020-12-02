import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
        <Link to="/" className="navbar-brand">Kostia</Link>
      
        <div className="menu-wrapper" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" activeStyle={{ color: '#343a40' }} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeStyle={{ color: '#343a40' }} className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" activeStyle={{ color: '#343a40' }} className="nav-link">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeStyle={{ color: '#343a40' }} className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}
