import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Old = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Old Guards</title>
    <Hero />
    <Team teamCode = 'og#234'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Old;
//17 May, 2021