import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleNavigation = (section) => {
    closeMobileMenu();

    if (location.pathname === '/') {
      // Ya estamos en Home → scroll directo
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    } else {
      // Estamos en otra página → ir a Home con hash
      history.push(`/#${section}`);
    }
  };

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
            <button className='nav-links' onClick={() => handleNavigation('home')}>
              Home
            </button>
          </li>

          <li className='nav-item'>
            <button className='nav-links' onClick={() => handleNavigation('dilemas')}>
              Dilemas
            </button>
          </li>

          <li className='nav-item'>
            <button className='nav-links' onClick={() => handleNavigation('autores')}>
              Autores
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
