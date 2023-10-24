import React, { useState, useEffect } from 'react';
// import teams from './data/top32Data';
import './data/ranking.css'
import Hero from '../../../components/sections/Hero';
import FeaturesTiles from '../../../components/sections/FeaturesTiles';
import Team from '../Team';
import { round } from 'lodash';

const Rank = () => {
 const[teams, setTeams] = useState([{}]);
//  fetchJsonp('https://yongliam.github.io/afInsider/ranking.data')

  fetch("https://github.com/YongLiam/afInsider/blob/main/ranking.data")
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    setTeams(jsonData)
  })
  .catch((error) => {
    // handle your errors here
  })

    teams.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));
    const date = teams[teams.length - 1].date;
    let topTeams = [];
    let flagLink = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';
    
    for(let i = 0; i<20; i++)
    {
        if(teams[i] !== undefined && teams[i].points !== 0) {
          const flagCode = teams[i].flag + '.svg';
          teams[i].flagCopy = flagLink.concat(flagCode);
          teams[i].points = round(teams[i].points)
        topTeams.push(teams[i]);
    }
        else
        break;
    }
    function setCode(a){
      setTCode(a);
      window.scrollTo(0, 0);
    }
    const [tCode, setTCode] = useState('insider');
    useEffect(() => {
      window.scrollTo(0, 0)
      return () => {
      }
    }, [])
    if(tCode === 'insider'){
  return (
    <>
    <Hero />
        <div className='container'>
            <div className='lcsA'>
              <table style={{border:' 0px solid rgb(219, 219, 219)'}}>
                  <thead><tr>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>RANK</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>TEAM</th>
                      {/* <th style={{border:' 0px solid rgb(219, 219, 219)'}}>TEAM CODE</th> */}
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>POINTS</th>
                      </tr>
                  </thead>
               <tbody>
          {topTeams.map((team, index) => (              
               <tr key={index}>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{index+1}</td>
               {team.flag === undefined?(<td style={{border:' 0px solid rgb(219, 219, 219)'}}><div className="team"><div className="team-logo"></div>{team.code === ''?(<div className="team-name">{team.name}</div>)
               :
               (<div style={{cursor:'pointer'}} className="team-name" onClick = {()=> setCode(team.code)}>{team.name}</div>)}</div></td>)
               :
               (<td style={{border:' 0px solid rgb(219, 219, 219)'}}><div className="team"><div className="team-logo"><img src={team.flagCopy} alt={team.name}/></div>{team.code === ''?(<div className="team-name">{team.name}</div>)
               :(<div style={{cursor:'pointer'}} className="team-name" onClick = {()=> setCode(team.code)}>{team.name}</div>)}</div></td>
               )}
               
               {/* {team.code === ''?
               (<td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.code}</td>)
                :
               (<td style={{border:' 0px solid rgb(219, 219, 219)',color:'#dd5656', cursor:'pointer'}} onClick = {()=> setTCode(team.code)}>{team.code}</td>
               )} */}
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.points}</td>
               
            </tr>

               
          ))}
            </tbody>
            </table>
            </div>
            Last updated: <span style={{color:'#dd5656'}}>{date}</span>
            </div>

            <FeaturesTiles />
    </>
  );
              }
  else {
  return (
    <>
    <Hero />
    <Team teamCode = {tCode} />
    <center style={{marginTop:'50px'}}>
    <button type='button' className="button button-primary button-wide-mobile button-sm" onClick={()=> setCode('insider')}>Back</button></center>

    <FeaturesTiles/>
    </>
  );
  }
  
};

export default Rank;
