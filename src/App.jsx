import React from 'react';
import Header from './components/Header/Header';

import './index.css';
import HeroPage from './components/Header/HeroPage/HeroPage';
import AboutPage from './components/About/AboutPage';

function App() {
  return (<> 
  
  <div>
      <Header />
    <HeroPage />
    <AboutPage />
  </div>
  
  </>
   
  );
}

export default App;
