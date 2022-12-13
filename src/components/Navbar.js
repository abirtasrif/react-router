import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "orangered" : null,
    };
  };



  return (
    <nav className='navbar'>
      <div className="logo">
        <span>My First SPA site</span>
      </div>
      <div className="links">
        <NavLink end to='/' style={navActiveStyles}>Home</NavLink>
        <NavLink end to='/theater' style={navActiveStyles}>Theater</NavLink>
        <NavLink to='/about' style={navActiveStyles}>About</NavLink>
        <NavLink to='/Contact' style={navActiveStyles}>Contact</NavLink>
      </div>

    </nav>
  )
}

export default Navbar;