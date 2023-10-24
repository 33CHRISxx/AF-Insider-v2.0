import React, {useState, useEffect} from 'react';
import Hero from '../../components/sections/Hero';
import firebase from 'firebase';
import './ranking/data/ranking.css'
import Flickity from 'flickity';
import './cards.css'



const Events = () => {
  const [events, setEvents] = useState([])
  const [isEvents, setIsEvents] = useState(true)
  const [updatedEvents, setUpdatedEvents] = useState([])
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
    if(updatedEvents.length>0 && events.length > updatedEvents.length)
    firebase.firestore().collection('PUBGM').doc('ALLevents').update({
      pubgm: updatedEvents
    })
  },[updatedEvents])

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
<center><h2 className="h2Style">RECENT EVENTS</h2></center>
 {updatedEvents.length>0?
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
         :
         (isEvents?
          <center><div id='loader' className="loader" style={{marginTop:10}}></div></center>
          :
          <center><div style={{marginTop:10}}>No event :)</div></center>
          )
    
    }

<br/>

    </>
  );
}

export default Events;