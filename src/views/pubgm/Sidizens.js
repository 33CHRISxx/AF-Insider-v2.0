import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Sidizens = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Sidizens eSports</title>
    <Hero />
    <Team teamCode = 'SDZN#234'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Sidizens;
//30 April, 2021