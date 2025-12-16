import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ÉTICA IA <i className='fas fa-robot' />
            </Link>
          </div>
          <small className='website-rights'>Dilemas Éticos de la IA © {new Date().getFullYear()}</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
