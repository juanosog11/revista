import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CoverPage from "../CoverPage"

function Home() {
  return (
    <>
      <CoverPage/>
      <Cards />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
