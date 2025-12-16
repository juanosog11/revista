import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CoverPage from '../CoverPage';
import DocumentationModal from '../DocumentationModal';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');

      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* HOME */}
      <section id='home'>
        <CoverPage />
      </section>

      {/* DILEMAS */}
      <section id='dilemas'>
        <Cards />
      </section>

      <DocumentationModal />

      {/* AUTORES */}
      <section id='autores'>
        <HeroSection />
      </section>

      <Footer />
    </>
  );
}

export default Home;
