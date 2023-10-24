import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';
import { useParams } from 'react-router';


const TeamCheck = () => {
  let {teamCode} = useParams();
  teamCode = teamCode.replace('-','#');
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>PUBGM Team</title>
    <Hero />
    <Team teamCode = {teamCode}/>
    <br/>
    <br/>
    </>
  );
}

export default TeamCheck;
