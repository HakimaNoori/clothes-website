import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Navigation from "./components/Navigation/Navigation";
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';

const App = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <Navbar />
        <Navigation />
        <Hero />
        <Trending/>
      </div>
    </>
  );
};
export default App;