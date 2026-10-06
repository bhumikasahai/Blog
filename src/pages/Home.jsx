import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import JournalPreview from '../components/JournalPreview';
import MemoryCollage from '../components/MemoryCollage';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <>
      <section className="first-section">
        <Header onNavigate={onNavigate} />
        <About />
      </section>

      <JournalPreview onNavigate={onNavigate} />
      <MemoryCollage />

      <Footer />
    </>
  );
};

export default Home;