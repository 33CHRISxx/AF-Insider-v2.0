import React, {useState, useEffect} from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
// import { Timeline } from 'react-twitter-widgets'
import Hero from '../components/sections/Hero';
import { round } from 'lodash';
import firebase from 'firebase';
import '../views/pubgm/ranking/data/ranking.css'
import Team from './pubgm/Team';
import Flickity from 'flickity';
import './pubgm/cards.css'
import countryFlags from './Contries';


const Home = () => {

  
  function setCode(a){
    setTeamCode(a);
    // window.scrollTo(0, 0);
  }
  const [teamCode, setTeamCode] = useState('insider')
  const[teams, setTeams] = useState([{}]);
 const[teamsOld, setTeamsOld] = useState([{}]);
 let current = [];
 const [events, setEvents] = useState([])
  const [isEvents, setIsEvents] = useState(true)
  const [updatedEvents, setUpdatedEvents] = useState([])
  const days = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' 
  ]
 const[scrimsToday, setScrimsToday] = useState([]);
 let scrimsTemp = [];
 let todaysScrims = [];
  let eEvents = [];
  let n =  new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
            if(m/10 < 1)
                m = `0${m}`
                if(d/10 < 1)
                d = `0${d}`
  let date = y + ' / ' + m + ' / ' + d;
  let ongoingEvents = [];
  let allEvents = [];
  useEffect(()=>{
  firebase.firestore().collection('PUBGM').doc('ALLevents').get().then((doc)=>{
      if((doc.data().pubgm).length === 0)
      setIsEvents(false);
      setEvents(doc.data().pubgm);
  });
},[]);
  useEffect(()=>{
    
      for(let i = 0; i<events.length; i++)
        eEvents.push(events[i])
    for(let i = 0; i<eEvents.length; i++){
      if(eEvents[i].start >= date){
        eEvents[i].status = 'upcoming';
        allEvents.push(eEvents[i]);
      }
      else{
        if(eEvents[i].end >= date){
          eEvents[i].status = 'ongoing';
          ongoingEvents.push(eEvents[i])
        }
        else
        {
          eEvents[i].orgCode = eEvents[i].org + '#org';
          firebase.storage().ref(`orgs/${eEvents[i].orgCode}/events/${eEvents[i].name}.png`)
          .delete()
        }
      }
    }
    allEvents.sort((a,b) => (a.start < b.start) ? -1 : ((b.start < a.start) ? 1 : 0));
    for(let i = 0; i<ongoingEvents.length; i++){
    allEvents.push(ongoingEvents[i]);
    }
       setUpdatedEvents(allEvents)
  },[events]);
 useEffect(()=>{
  firebase.firestore().collection('PUBGM').doc('Ranking').get().then((doc)=>{
      current = doc.data().current;
      for(let i =0; i<current.length; i++){
        const flagCode = countryFlags[current[i].country] + '.svg';
          current[i].flagCopy = flagLink.concat(flagCode);
      }
     setTeams(current)
      setTeamsOld(doc.data().oldCurrent);
  })

    firebase.firestore().collection('PUBGM').doc('ALLscrims').get().then((doc)=>{
      scrimsTemp = doc.data().pubgm;
      let todayDay = days[n.getUTCDay()];
      for(let i = 0; i<scrimsTemp.length;i++){
        if(scrimsTemp[i].tiers[0] === 'All')
        scrimsTemp[i].tier = 'All';
        else
        scrimsTemp[i].tier = scrimsTemp[i].tiers.join(' | ');
        if(scrimsTemp[i].days[0] === 'Daily'){
          scrimsTemp[i].day = 'Daily';
          todaysScrims.push(scrimsTemp[i]);
        }
        else{
          scrimsTemp[i].day = scrimsTemp[i].days.join(' | ');
          if((scrimsTemp[i].days).includes(todayDay))
          todaysScrims.push(scrimsTemp[i]);
        }
        
  
      }
      setScrimsToday(todaysScrims);
    })

 },[]) 
    scrimsToday.sort((a,b) => (a.time < b.time) ? -1 : ((b.time < a.time) ? 1 : 0));
 let topTeams = [];
let flagLink = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';
  teamsOld.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));
    teams.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));

    for(let i = 0; i<5; i++){
      let j = 0;
      for(j =0; j<5; j++){
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
      if(j === 5 && teams[i] !== undefined && teams[i].points !== 0)
      {
        const flagCode = countryFlags[teams[i].country] + '.svg';
            teams[i].flagCopy = flagLink.concat(flagCode);
            teams[i].points = round(teams[i].points)
            teams[i].rank = <span style={{color:"green"}}>↑</span>;
          topTeams.push(teams[i]);
      }
    }
 
    useEffect(() => {
      // window.scrollTo(0, 0)
      return () => {
      }
    }, [])
    console.clear();

    const carousels = document.querySelectorAll('.card-wrap');

carousels.forEach(carousel => {
  new Flickity(carousel, {
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    adaptiveHeight: true,
    setGallerySize: false,
    selectedAttraction: 0.05,
    freeScrollFriction: .1
  });
});


    if(teamCode === 'insider' || teamCode === ''){
        return (
    <>
<Hero />
<div className='container'>
       <i>Search team using team code...</i><br/>
       <input style={{height:'50px', borderRadius:'10px', border:'0.4px solid #404040',  background:'black', color:'white'}} type='text' id='teamCode' placeholder='ins#27'/><br/>
       <button type='button' style={{marginTop:'10px', background:'#9a1a1a', width:100, borderRadius:'10px', marginBottom:'20px'}} className="button button-primary button-wide-mobile button-sm" onClick={() => setCode(document.getElementById('teamCode').value)}>Search</button>
               </div>
               <hr style={{background:'#1C1C1C'}} />



{updatedEvents.length>0?
<>
  <center><h2 className="h2Style">RECENT EVENTS</h2></center>
<table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>
</th>
                  <th></th>
            
                  </tr>
              </thead>
           <tbody>
            
      {updatedEvents.map((event, index) => (       
       <><tr onClick={()=> window.open(event.link, "_blank")} key={index} className='scrimsRow' style={{background:'#1C1C1C'}}>
           <td colSpan="2" style={{border:' 0px solid rgb(219, 219, 219)', borderRight:'100px solid red'}}>
               <div className="team" style={{width: '100%'}}>
               <div className="team-logo" style={{marginLeft:'10px', width:'160px', height:'100%', borderRadius:0, objectFit:'fill'}}>
                       <img src={event.logo} alt={event.name}/>
               </div>
               <div className="team-name"
               style={{width: '100%',cursor:'pointer', textAlign:'left'}} 
               >
                <span style={{color:'white',fontWeight:'bolder'}}>{event.name} <span style={{ fontStyle:'italic', color:'#F1AB42', fontSize:14}}>
                             ({event.org})</span></span>
<br/>
<span style={{fontSize:14}}>
                            <b>Prize Pool</b> - {event.prize}</span>
                            <br/>
                 <span style={{ fontSize:14}}>
                            <b>Region</b> - <span style={event.region == 'Africa'?{color:'green'}:{color:'yellow'}}>{event.region}</span></span>
                            <br/>
             <span style={{fontSize:14}}>
                            <b>Start</b> - {event.start}</span>
                            <br/>
             <span style={{fontSize:14}}>
                            <b>Status</b> - <span style={event.status == 'upcoming'?{color:'green'}:{color:'yellow'}}>{event.status}</span></span>
            </div>
            
           </div></td>
           
                 </tr>
                 <br/>
                 </>

))}
  
        </tbody>
        </table> 
        </>
         :
         (isEvents?
          <center><h2 className="h2Style">RECENT EVENTS</h2><br/>
          <div id='loader' className="loader" style={{marginTop:10}}></div><br/><br/></center>
          :
          <center><div style={{marginTop:10}}>No event :)</div></center>
          )
    
    }

{scrimsToday.length>0?
<center><h2 className="h2Style">SCRIMS TODAY</h2>
<table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
            
                  </tr>
              </thead>
           <tbody>
  {scrimsToday.map((scrim,index)=>{
    return  <><tr onClick={()=> window.open(scrim.social, "_blank")} key={index} className='scrimsRow' style={{background:'#1C1C1C'}}>
    <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)', borderRight:'100px solid red'}}>
        <div className="team" style={{width: '100%'}}>
        <div className="team-logo" style={{marginLeft:'10px', width:'160px', height:'80px', borderRadius:0, objectFit:'fill'}}>
                <img src={scrim.logo} alt={scrim.name}/>
        </div>
        <div className="team-name"
        style={{width: '100%',cursor:'pointer', textAlign:'left'}} 
        >
         <span style={{color:'white',fontWeight:'bolder'}}>{scrim.name} <span style={{ fontStyle:'italic', color:'#F1AB42', fontSize:14}}>
                      ({scrim.org})</span></span>
<br/>
          <span style={{ fontSize:14}}>
                     {scrim.day}</span>
                     <br/>
      <span style={{fontSize:14}}>
                     Tier - {scrim.tier}</span>
     </div>
     
    </div></td>
    <td  style={{float:'right', color:'black',marginTop:15}}>
             <span style={{float:'left', color:'white', fontSize:16}}>{scrim.time} CAT</span>
           </td>
    
          </tr>
          <br/>
          </>
})}
</tbody>
        </table>
</center>
:
null
}

<center><h2 className="h2Style">TOP TEAMS</h2></center>
                    <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
                  </tr>
              </thead>
           <tbody>
      {topTeams.map((team, index) => (              
       <><tr key={index} className='boardRows' style={index%2==0?{background:'black'}:{background:'#1C1C1C'}}>
           <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)', borderRight:'100px solid red'}}>
               <div className="team" style={{width: '100%'}}>
               <span style={{float:'left',fontStyle:'italic', color:'#dd5656', fontSize:18}}>#{index+1}.</span> <div className="team-logo" style={{marginLeft:'10px', width:'60px', height:'40px'}}>
                       <img src={team.logo} alt={team.name}/>
               </div>
               <div className="team-name"
               style={{width: '100%',cursor:'pointer', textAlign:'left'}} 
               onClick = {()=> setCode(team.code)}>
                 <span style={{color:'white'}}>{team.name}</span>

             <span><img className="flag"
             src={team.flagCopy} style={{borderRadius:0}} width='20px' height='20px'/>
             </span>
             <span style={{ fontStyle:'italic', color:'#F1AB42', fontSize:14}}>
                             Ranked Events: <span style={{color:'white'}}>{team.events}</span></span>
            </div>
            
           </div></td>
           <td  style={{float:'right', color:'black',marginTop:15}}>
             <span style={{float:'left',fontStyle:'italic', color:'white', fontSize:18}}>{team.points}  <span style={{fontSize:'10px'}}>{team.rank}</span></span>
           </td>
           
                 </tr>
                 </>

      ))}

        </tbody>
        </table>
    </>
  );
}

  else {
  return (
    <>
    <Hero />
    <Team teamCode = {teamCode} />
    <center style={{marginTop:'50px', marginBottom:'100px'}}>
    <button type='button' className="button button-primary button-wide-mobile button-sm" onClick={() => setCode('insider')}>Back</button></center>
</>
  ); 
}
}

export default Home;