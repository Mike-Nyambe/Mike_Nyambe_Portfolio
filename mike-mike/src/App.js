import React from 'react';

import{ About,Header, Skills, Work, Footer } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
