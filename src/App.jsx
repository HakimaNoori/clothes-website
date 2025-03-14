import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Navigation from "./components/Navigation/Navigation"
import Hero from './components/Hero/Hero';
import Props from './components/props/Prop';

const App = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <Navbar />
        <Navigation />
        <Hero />
        <Props />
      </div>
    </>
  );
};
export default App;