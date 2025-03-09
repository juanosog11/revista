import React from 'react';
import '../App.css';
import './CoverPage.css';

function CoverPage() {
  return (
    <div className='container'>
      <video src='/videos/videoHome.mp4' autoPlay loop muted />
        <div className='content'>
          <h1 className='title'>Dilemas Éticos de la IA</h1>
          <p className='subtitle'>Explorando los desafíos eticos de la inteligencia artificial</p>
          <button className='cta-button'>Descubrir más</button>
        </div>
      </div>
  );
}

export default CoverPage;
