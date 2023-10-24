import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Active = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Active Gaming</title>
    <Hero />
    <Team teamCode = 'act#234'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Active;
//17 May, 2021