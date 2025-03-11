import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='fas fa-robot'></i> AI Ethics
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <ScrollLink to='Home' smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
              Home
            </ScrollLink>
          </li>
          <li className='nav-item'>
            <ScrollLink to='magazine1' smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
              Revista
            </ScrollLink>
          </li>
          <li className='nav-item'>
            <ScrollLink to='hero-section' smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
              Autores
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
