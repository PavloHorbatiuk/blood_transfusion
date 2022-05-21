import React from 'react'
import Steps from './components/Steps/Steps';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import DocInfo from './components/docinfo/DocInfo'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <DocInfo />
      <Footer />
    </>
  );
}

export default App;
