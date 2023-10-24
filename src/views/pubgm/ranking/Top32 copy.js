import React, { useState, useEffect } from 'react';
import './ranking.css'
import Hero from '../../../components/sections/Hero';
import FeaturesTiles from '../../../components/sections/FeaturesTiles';
import Team from '../Team';
import { round } from 'lodash';
import firebase from 'firebase';
import { AERtiers } from '../../codm/AER';

const countryFlags = {
    'Algeria': 'DZ',
    'DR Congo': 'CD',
    'Ethiopia': 'ET',
    'Egypt': 'EG',
    'Tanzania': 'TZ',
    'South Africa': 'ZA',
    'Nigeria': 'NG',
    'Kenya': 'KE',
    'Uganda': 'UG',
    'Sudan': 'SD',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Namibia': 'NA',
    'Angola': 'AO',
    'Ghana': 'GH',
    'Madagascar': 'MG',
    'Cameroon': 'CM',
    "Côte d'Ivoire": 'CI',
    'Niger': 'NE',
    'Burkina Faso': 'BF',
    'Mali': 'ML',
    'Malawi': 'MW',
    'Zimbabwe': 'ZW',
    'Guinea': 'GQ',
    'Rwanda': 'RW',
    'Benin': 'BJ',
    'Burundi': 'BI',
    'Tunisha': 'TN',
    'South Sudan': 'SS',
    'Togo': 'TG',
    'Sierra Leone': 'SL',
    'Libyan Arab Jamahiriya': 'LY',
    'Congo': 'CG',
    'Liberia': 'LR',
    'Central African Republic': 'CF',
    'Mauritania': 'MR',
    'Eritrea': 'ER',
    'Gamnbia': 'GM',
    'Botswana': 'BW',
    'Gabon': 'GA',
    'Lesotho': 'LS',
    'Guinea-Bissau': 'GW',
    'Guinea': 'GN',
    'Equatorial Guinea': 'GQ',
    'Djibouti': 'DJ',
    'Comoros': 'KM',
    'Somalia': 'SO',
    'Cabo Verde': 'CV',
    'Sao Tome and Principe': 'ST',
    'Seychelles': 'SC',
    'Ivory Coast': 'CI' ,
    'Mauritius': 'MU',
  }
const Ranking = () => {
 const[teams, setTeams] = useState([{}]);
 const[teamsOld, setTeamsOld] = useState([{}]);
 const[date,setDate] = useState('thinking...')
 let current = [];
 useEffect(()=>{
  firebase.firestore().collection('PUBGM').doc('Ranking').get().then((doc)=>{
      current = doc.data().current;
      setDate(doc.data().date);
      for(let i =0; i<current.length; i++){
        const flagCode = countryFlags[current[i].country] + '.svg';
          current[i].flagCopy = flagLink.concat(flagCode);
      }
     setTeams(current)
      setTeamsOld(doc.data().oldCurrent);
  })

 },[]) 
 let topTeams = [];
let flagLink = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';
  teamsOld.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));
    teams.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));

    for(let i = 0; i<20; i++){
      let j = 0;
      for(j =0; j<20; j++){
        if(teams[i] !== undefined && teamsOld[j] !== undefined && teams[i].points !== 0 && teamsOld[j].points !== 0)
          if(teams[i].code === teamsOld[j].code){
          if(i < j){
            const flagCode = countryFlags[teams[i].country] + '.svg';
            teams[i].flagCopy = flagLink.concat(flagCode);
            teams[i].points = round(teams[i].points)
            teams[i].rank = <span style={{color:"green"}}>({j - i}↑)</span>;
          topTeams.push(teams[i]);
          break;
          }
          else if(i>j){
            const flagCode = countryFlags[teams[i].country] + '.svg';
            teams[i].flagCopy = flagLink.concat(flagCode);
            teams[i].points = round(teams[i].points)
            teams[i].rank = <span style={{color:"red"}}>({i-j}&#8595;)</span>;
          topTeams.push(teams[i]);
          break;
          }
          
          else
          {
            const flagCode = countryFlags[teams[i].country] + '.svg';
            teams[i].flagCopy = flagLink.concat(flagCode);
            teams[i].points = round(teams[i].points)
            teams[i].rank = <span></span>;
          topTeams.push(teams[i]);
          break;
        }
        }
      }
      if(j === 20 && teams[i] !== undefined && teams[i].points !== 0)
      {
        const flagCode = countryFlags[teams[i].country] + '.svg';
            teams[i].flagCopy = flagLink.concat(flagCode);
            teams[i].points = round(teams[i].points)
            teams[i].rank = (<span style={{color:"green"}}>↑</span>);
          topTeams.push(teams[i]);
      }
    }
 
    
    function setCode(a){
      setTCode(a);
      window.scrollTo(0, 0);
    }
    const [tCode, setTCode] = useState('insider');
    const [gameTitle, setGameTitle] = useState('PUBGM');
    const [codmTier, setCodmTier] = useState('T1');


    useEffect(() => {
      window.scrollTo(0, 0)
      return () => {
      }
    }, [])
    
    if(tCode === 'insider'){
              return (
                <>
                <Hero />
                <table style={{marginBottom:0,border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead>
                <tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>
                <select
                style={{background:'#000', color:'#fff', padding:5, borderColor:'#333'}}
                value={gameTitle}
                onChange={(e)=>setGameTitle(e.target.value)}>
  <option value='PUBGM'>PUBGM</option>
  <option value='CODM'>CODM</option>
</select>
</th>
</tr>
</thead>
</table>

{gameTitle==='CODM'?
<>
<table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead>
                <tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>
<select
                style={{background:'#000', color:'#fff', padding:5, borderColor:'#333'}}
                value={codmTier}
                onChange={(e)=>setCodmTier(e.target.value)}>
  <option value='T1'>T1</option>
  <option value='T2'>T2</option>
</select>
</th>
</tr>
</thead>
</table>
{codmTier==='T1'?
<>
<AERtiers lobby='A'/>
</>
:
<>
<AERtiers lobby='B'/>
</>

}
</>
:
<>
<br/>
<center><h2 className="h2Style" style={{letterSpacing:'2px', wordSpacing:'5px'}}>TOP 20 TEAMS</h2></center>
                    <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
                  </tr>
              </thead>
           <tbody>
      {topTeams.map((team, index) => (              
       <>
       <tr key={index} className='boardRows'>
           <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)', borderRight:'100px solid red'}}>
               <div className="team" style={{width: '100%'}}>
               <span style={{float:'left',fontStyle:'italic', color:'#dd5656', fontSize:18}}>#{index+1}.</span> <div className="team-logo" style={{marginLeft:'10px', width:'60px', height:'40px'}}>
                       <img src={team.logo} alt={team.name}/>
               </div>
               <div className="team-name"
               style={{width: '100%', cursor:'pointer', textAlign:'left'}} 
               onClick = {()=> setCode(team.code)}>
                 <span>{team.name}</span>

             <span><img className="flag"
             src={team.flagCopy} style={{borderRadius:0}} width='20px' height='20px'/>
             </span>
             <span style={{ fontStyle:'italic', color:'#F1AB42', fontSize:14}}>
                             Ranked Events: <span style={{color:'white'}}>{team.events}</span></span>
            </div>
            
           </div></td>
           <td  style={{float:'right',marginTop:15}}>
             <span style={{float:'left',fontStyle:'italic', fontSize:18}}>{team.points} <span style={{fontSize:'10px'}}>{team.rank}</span>
             </span>
             
           </td>
           
                 </tr>
                 </>

      ))}

        </tbody>
        </table>
                  <center>Last updated: <span style={{color:'#dd5656'}}>{date}</span></center>
                  <center>
                    <a href='/rankedevents'><button type='button' className="button button-primary button-wide-mobile button-sm">Ranked Events</button></a>
                    <br/>
                    </center>
                    <br/>
                </>
              }
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
    <br/>
    </>
  );
  }
  
};

export default Ranking;
