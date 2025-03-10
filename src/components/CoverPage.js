import React,{useState} from 'react';
import '../App.css';
import { Link as ScrollLink } from 'react-scroll';
import './CoverPage.css';

function CoverPage() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div id='Home' className='container'>
      <video src='/videos/videoHome.mp4' autoPlay loop muted />
        <div className='content'>
          <h1 className='title'>Dilemas Éticos de la IA</h1>
          <p className='subtitle'>Explorando los desafíos eticos de la inteligencia artificial</p>
          <div className='cta-button' onClick={handleClick}>
                      <ScrollLink to='magazine1' smooth={true} duration={500}  onClick={closeMobileMenu}>
            Descubrir más
          </ScrollLink>
          </div>
          
        </div>
      </div>
  );
}

export default CoverPage;


