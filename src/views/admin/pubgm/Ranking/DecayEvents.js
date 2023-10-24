import React, { useEffect, useState } from 'react';
import Hero from '../../../../components/sections/Hero';
import FeaturesTiles from '../../../../components/sections/FeaturesTiles';
import firebase from 'firebase';

const DecayEvents = () => {
const[loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  function decayEvent(e){
      setLoading(true);
    e.preventDefault();
    let current =[];
    let oldCurrent = [];
    let events = [];
    let newEvents = [];
    let decayMonth;
    let errorDecay = 0;
    let date = new Date();
    let  updateDate = `${date.getUTCDate()} / ${date.getUTCMonth()+1} / ${date.getUTCFullYear()}`
    date = date.getUTCMonth()+1;

    firebase.firestore().collection('PUBGM').doc('Ranking').get().then((doc)=>{
        current = doc.data().current;
        oldCurrent = doc.data().current;
        events = doc.data().events;
        decayMonth = doc.data().decayMonth;
    }).then(()=>{
        if(date===decayMonth){
                  alert('Events already decayed for this month !!');
                  errorDecay = 1;  
                  setLoading('decayedB4')
        }
        else{
            for(let i = 0; i<events.length; i++){
            if(events[i].month > 0){
                for(let j=0; j<events[i].teams.length; j++){
                    for(let k = 0; k<current.length; k++){
                        if(current[k].code === events[i].teams[j].code){
                            current[k].points -= events[i].teams[j].decay;
                            if(events[i].month === 1)
                            current[k].events -= 1; 
                        }
                    }
                }
                let newEvent = {
                    name: events[i].name,
                    month: events[i].month-1,
                    teams: events[i].teams
                }
                newEvents.push(newEvent);
            }
            }
        }
    }).then(()=>{
        if(errorDecay === 0){
            firebase.firestore().collection('PUBGM').doc('Ranking').update({
                events: newEvents,
                decayMonth: date,
                date: updateDate,
                current: current,
                oldCurrent: oldCurrent
            }).then(()=>{alert('DECAY SUCCESSFUL!');
        setLoading('decayed')})
        }
    })
    
  }
  return (
    <>
    <title>Decay Events</title>
    <Hero />
 
        <div style={{background:'#ececec', margin:'auto', maxWidth:800, padding:20,width:'80%', marginBottom:80, color:'black'}}>
    <center>
      <span style={{color:'red', fontWeight:'bolder'}}> NOTE: THIS WILL DECAY ALL EVENTS</span><br/>
  
 {loading === true?
       <div id='loader' className="loader"></div>
       :
 (loading==='decayed'?<h3 style={{color:'tomato'}}>DECAYED</h3>:
 loading==='decayedB4'?<h3 style={{color:'tomato'}}>DECAYED BEFORE</h3>:
        <input type="submit" onClick={decayEvent} style={{background:'#dd5656', color:'white', border:0, padding:10, marginBottom:20}} value='DECAY' />
 )}
      </center>
      </div>

    </>
  );
}

export default DecayEvents;