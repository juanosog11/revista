import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/about'>Equipo Editorial</Link>
            <Link to='/about'>Misión y Visión</Link>
            <Link to='/about'>Metodología</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/contact'>Contacto</Link>
            <Link to='/suggestions'>Sugerencias</Link>
            <Link to='/collaborate'>Colabora con Nosotros</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Recursos</h2>
            <Link to='/resources'>Bibliografía</Link>
            <Link to='/resources'>Enlaces de Interés</Link>
            <Link to='/resources'>Investigaciones Relacionadas</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              Instagram
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              Facebook
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              Twitter
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ÉTICA IA <i className='fas fa-robot' />
            </Link>
          </div>
          <small className='website-rights'>Dilemas Éticos de la IA © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
