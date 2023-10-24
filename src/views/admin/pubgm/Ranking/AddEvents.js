import React, { useEffect, useState } from 'react';
import Hero from '../../../../components/sections/Hero';
import FeaturesTiles from '../../../../components/sections/FeaturesTiles';
import firebase from 'firebase';


const pointSystem = [
    500,400,350,300,280,260,240,220,200,185,
    170,155,140,125,110,100,90,80,70,60,
    50,45,40,35,30,25,20,18,16,14,
    12,10
]
const eventClasses = {
    'S':1,
    'A':0.8,
    'B':0.5,
    'C':0.2,
}
const AddEvent = () => {
const[formFields, setFormFields] = useState([]);
const[loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
    let noTeams = prompt('Enter number of teams');
    let formTeam=[];
    if(noTeams>0 && noTeams<33){
        for(let i =0;i<noTeams; i++){
           formTeam.push(i);
        }
        setFormFields(formTeam)
    }
    return () => {
    }
  }, [])
  async function addEvent(e){ 
    setLoading(true);
    e.preventDefault();
    let teamsCode = [];
    let teams = [];
    let teamCode = '';
    let eventName = document.getElementById('eventName').value;
    let eventClass = document.getElementById('eventClass').value;
    if(eventName !== '' && eventClass !== ''){
    for(let i=0; i<formFields.length;i++){
        teamCode = document.getElementById(`teamCode${(i+1)}`).value;
        if(teamCode==''){
            setLoading(false)
            alert(`Team code required @position ${(i+1)}`);
            teamsCode = [];
            break;
        }
        else
        teamsCode.push(teamCode);
    }
    if(teamsCode.length>0){
        for(let i=0; i<teamsCode.length;i++){
            await firebase.firestore().collection('PUBGMteams').doc(teamsCode[i]).get().then((doc)=>{
                if(doc.data() !== undefined){
                    let teamPoint = pointSystem[i] * eventClasses[eventClass];
                    let teamDecay = teamPoint/10;
                    let team = {
                        name: doc.data().name,
                        code: doc.data().code,
                        logo: doc.data().logo,
                        country: doc.data().country,
                        point: teamPoint,
                        decay: teamDecay,
                    }
                    teams.push(team);
                    if(teams.length === teamsCode.length)
    updateTeams(teams,teamsCode,eventName);
                }
                else{
                    setLoading(false)
                    alert(`Unknown team @position ${(i+1)}`);
                }
            }) 
                       
        }
        
    }
    
}
else{
    setLoading(false)
    alert('Event name and class required!')
}

  }

  function updateTeams(teams,teamsCode,eventName){
    if(teams.length === teamsCode.length){
        let events = [];
    let current = [];
    let oldCurrent = [];
        let event = {
            name: eventName,
            month: 10,
            teams: teams
        }
        firebase.firestore().collection("PUBGM").doc("Ranking").get().then((doc)=>{
events = doc.data().events;
current = doc.data().current;
oldCurrent = doc.data().current;
            }).then(()=>{
                 events.push(event);
                 for(let i=0;i<teams.length; i++){
                    let j=0;
                    for(j=0; j<current.length; j++){
                    if(teams[i].code===current[j].code){
                        current[j].events += 1;
                        current[j].points += teams[i].point;
                        break;
                    }
                    }
                    if(j===current.length){
                        let newTeam = {
                            name: teams[i].name,
                            logo: teams[i].logo,
                            code: teams[i].code,
                            points: teams[i].point,
                            events: 1,
                            country: teams[i].country,
                        }
                        current.push(newTeam);
                    }
                }
                
            }).then(()=>{
                let date = new Date();
                date = `${date.getUTCDate()} / ${date.getUTCMonth()+1} / ${date.getUTCFullYear()}`
                firebase.firestore().collection("PUBGM").doc("Ranking").update({
                    events: events,
                    current: current,
                    oldCurrent: oldCurrent,
                    date: date
                    }).then(()=> setLoading('submitted'))
            })

        
    }
  }
  return (
    <>
    <title>Add Event</title>
    <Hero />
 
        <div style={{background:'#ececec', margin:'auto', maxWidth:800, padding:20,width:'80%', marginBottom:80, color:'black'}}>
    <center>
        Enter Event Name<br/>
    <input type="text" id='eventName' required style={{marginBottom: 10, width:'80%', height:40}}/><br/>
    Select Event Class<br/>
    <select id='eventClass'>
        <option hidden value=''>Event Class</option>
        <option value='S'>S - $50,000+</option>
        <option  value='A'>A - $20,000+</option>
        <option  value='B'>B - $10,000+</option>
        <option  value='C'>C - $1,000+</option>
        </select>
    <br/>
    <br/>
    Enter Team Code (in leaderboard order)<br/>
{formFields.map((forms, index)=>{
    return <>{index+1}. <input type="text" id={'teamCode'+(index+1)} required style={{marginBottom: 10, width:'80%', height:40}}/><br/></>
})}
 {loading === true?
       <div id='loader' className="loader"></div>
       :
 (loading==='submitted'?<h3 style={{color:'tomato'}}>Event Added</h3>:
        <input type="submit" onClick={addEvent} style={{background:'#dd5656', color:'white', border:0, padding:10, marginBottom:20}} value='Add Event' />
 )}
      </center>
      </div>

    </>
  );
}

export default AddEvent;