import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Prototype = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Sidizens eSports</title>
    <Hero />
    <Team teamCode = 'PRO#234'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Prototype;
//2 May, 2021