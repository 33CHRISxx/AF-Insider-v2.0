import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';


const Slime4kt = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Slime 4kT</title>
    <Hero />
    <Team teamCode = '4kT#234'/>
     <FeaturesTiles  topDivider/>
    </>
  );
}

export default Slime4kt;