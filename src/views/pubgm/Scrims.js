import React, {useState, useEffect} from 'react';
import Hero from '../../components/sections/Hero';
import { round } from 'lodash';
import firebase from 'firebase';
import './ranking/data/ranking.css'
import Flickity from 'flickity';
import './cards.css'
import countryFlags from '../Contries';



const Scrims = () => {
  const days = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' 
  ]
  const[scrims, setScrims] = useState([{}]);
  const[allScrims, setAllScrims] = useState([{}]);
 const[scrimsToday, setScrimsToday] = useState([]);
 const[sortDays, setSortDays] = useState('All');
 const[sortTiers, setSortTiers] = useState('All');
 let scrimsTemp = [];
 let todaysScrims = [];
 let date = new Date();


 function sortScrimsTiers(e){
   let sortedScrims = [];
   for(let i = 0; i<allScrims.length;i++){
     if((allScrims[i].tiers[0] === 'All' || (allScrims[i].tiers).includes(e.target.value))
     && (allScrims[i].days[0] === 'Daily' || (allScrims[i].days).includes(sortDays)))
     sortedScrims.push(allScrims[i]);
   }
   setScrims(sortedScrims);
   setSortTiers(e.target.value);
  }

  function sortScrimsDays(e){
    let sortedScrims = [];
    for(let i = 0; i<allScrims.length;i++){
      if((allScrims[i].days[0] === 'Daily' || (allScrims[i].days).includes(e.target.value))
      && (allScrims[i].tiers[0] === 'All' || (allScrims[i].tiers).includes(sortTiers)))
      sortedScrims.push(allScrims[i]);
    }
    setScrims(sortedScrims);
    setSortDays(e.target.value);
   }

 useEffect(()=>{
  firebase.firestore().collection('PUBGM').doc('ALLscrims').get().then((doc)=>{
    scrimsTemp = doc.data().pubgm;
    let todayDay = days[date.getUTCDay()];
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
      setScrims(scrimsTemp)
      setAllScrims(scrimsTemp)
  })

 },[]) 
 scrims.sort((a,b) => (a.time < b.time) ? -1 : ((b.time < a.time) ? 1 : 0));
 scrimsToday.sort((a,b) => (a.time < b.time) ? -1 : ((b.time < a.time) ? 1 : 0));

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

        return (
    <>
<Hero />
{scrimsToday.length>0?
<center><h2 className="h2Style">SCRIMS TODAY</h2>
  <div className='container'>
  <div className="card-wrap">
  {scrimsToday.map((scrims,index)=>{
    return <a href={scrims.social} target='_blank' key={index} className="cardScrims" style={{background: "black"}}>
    <div className="card__overlay"></div>
    <div className="card__image">
      <img src={scrims.logo} /></div>
    <div className="card__info">
        <div className="card__title">{scrims.name}</div>
      <div className="card__text"><b>Time:</b> {scrims.time} CAT</div>
      <div className="card__text"><b>Tier:</b> <b style={{color:'orange'}}>{scrims.tier}</b></div>
      <div className="card__text"><b>Org:</b> {scrims.org}</div>
    </div></a>
})}
</div>
</div>
</center>
:
null
}

<center><h2 className="h2Style">SCRIMS</h2></center>

                    <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>

<select style={{background:'#000', color:'#fff', padding:5, borderColor:'#333'}} value={sortDays} onChange={sortScrimsDays}>
  <option value='Daily'>Daily</option>
  <option value='Mon'>Monday</option>
  <option value='Tue'>Tuesday</option>
  <option value='Wed'>Wednesday</option>
  <option value='Thu'>Thursday</option>
  <option value='Fri'>Friday</option>
  <option value='Sat'>Saturday</option>
  <option value='Sun'>Sunday</option>
</select>
<br/>
<select style={{marginTop:10,background:'#000', color:'#fff', padding:5, borderColor:'#333'}} value={sortTiers} onChange={sortScrimsTiers}>
  <option value='All'>All Tiers</option>
  <option value='T1'>Tier 1</option>
  <option value='T2'>Tier 2</option>
  <option value='T3'>Tier 3</option>
</select></th>
                  <th></th>
            
                  </tr>
              </thead>
           <tbody>
      {scrims.map((scrim, index) => (              
       <><tr onClick={()=> window.open(scrim.social, "_blank")} key={index} className='scrimsRow' style={{background:'#1C1C1C'}}>
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

      ))}

        </tbody>
        </table>
    </>
  );
}

export default Scrims;