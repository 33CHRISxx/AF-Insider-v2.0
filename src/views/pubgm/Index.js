import React, {useState,useEffect} from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles'
import Team from './Team';
import teams from './ranking/data/top32Data';
import { round } from 'lodash';
import Testimonial from '../../components/sections/Testimonial';


function Index() {
  function setCode(a){
    setTeamCode(a);
    window.scrollTo(0, 0);
  }
    const[tCode, setTeamCode] = useState('insider');
    teams.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));
    let topTeams = [];
    let flagLink = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/';
    for(let i = 0; i<3; i++) {
      const flagCode = teams[i].flag + '.svg';
          teams[i].flagCopy = flagLink.concat(flagCode);
          teams[i].points = round(teams[i].points)
          topTeams.push(teams[i]); 
    }
    
    useEffect(() => {
      window.scrollTo(0, 0)
      return () => {
      }
    }, [])
    if(tCode === 'insider'){
    return(
        <>
        <Hero />
     <Testimonial />
     <br/>
     <div className='container'>
       
    <center>
    <b>Search Team</b><br/>
    <input style={{width:'80%',height:'50px', marginRight:'10%',  marginLeft:'10%'}} type='text' id='teamCode' placeholder='Enter team code (example: 4kT#234)'/>
    <button type='button' style={{marginTop:'20px', marginBottom:'20px'}} className="button button-primary button-wide-mobile button-sm" onClick={() => setCode(document.getElementById('teamCode').value)}>Search</button></center>
            </div>
    <FeaturesTiles  topDivider/>


        </>
    );
}
    else {
    return(
        <>
        <Hero/>
    <Team teamCode = {tCode} />

    <div className='container' style={{marginTop:'30px', marginBottom: '30px'}}>
    <center>
    <button type='button' className="button button-primary button-wide-mobile button-sm" onClick={() => setCode('insider')}>Back</button></center>
  </div>
    <FeaturesTiles  topDivider/>

    
    </>
    );
    }
}
export default Index;