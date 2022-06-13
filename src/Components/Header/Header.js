import React from 'react';
import logo from '../../images/logo.png';

function Header() {
  return (
    <nav>
      <div className="logo">
        <img className="logo-header" src={logo} alt="logo" />
        <h4>Title</h4>
      </div>
      <div className="links">
        <a className="link" href="/"> Missions</a>
        <a className="link" href="/"> Dragons</a>
        <a className="link" href="/"> Rockets</a>
        {' '}
        |
        <a className="link" href="/"> Profile</a>
      </div>
    </nav>
  );
}

export default Header;
