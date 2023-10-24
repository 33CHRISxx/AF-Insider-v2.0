import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Existence = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Existence eSports</title>
    <Hero />
    <Team teamCode = 'souls#27'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Existence;
//09 April, 2021