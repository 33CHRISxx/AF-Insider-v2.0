import React, { useEffect, useState } from 'react';
import Hero from '../../components/sections/Hero';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import Team from './Team';
import firebase from '../../Firebase';


const RequestTick = () => {
const[uid, setUID] = useState('');
const[teamCode, setTeamCode] = useState('');
const[loading, setLoading] = useState(false);
    function requestTick(e){
        e.preventDefault();
        setLoading(true);
let newRequest = {
    uid: uid,
    teamCode: teamCode 
}
firebase.firestore().collection("App").doc("Verification").update({
requests: firebase.firestore.FieldValue.arrayUnion(newRequest)
}).then(()=> setLoading('submitted'))
    }
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <title>Request Verification</title>
    <Hero />
 
        <div style={{background:'#ececec', margin:'auto', maxWidth:500, padding:20,width:'80%', color:'black'}}>
    <center>
        <form onSubmit={requestTick}>
            <h3>Request for verification</h3>
            <br/>
       <label>Your Insider App UID</label><br/>
       <input type="text" required style={{marginBottom: 20, height:30}} onChange={(e)=>setUID(e.target.value)}/>
       <br/>
       <label>Your Insider team code</label><br/>
       <input type="text" placeholder="ins#27" required style={{marginBottom: 20, height:30}} onChange={(e)=>setTeamCode(e.target.value)}/>
       <br/>
       {loading === true?
       <div id='loader' className="loader"></div>
       :
       (loading==='submitted'?<h3 style={{color:'tomato'}}>Your request has been submitted</h3>:
       <input type="submit" style={{background:'#dd5656', color:'white', border:0, padding:10, marginBottom:20}} />
       )
}
       <br/>
       <b>Note:</b> Verification can take upto 3 days<br/>
       To ensure fast verification process, kindly inform your team manager to open <span style={{color:'tomato'}}>Insider ticket</span>, and submit all player's UID on <a href='https://discord.gg/jVdbTvuEQe' style={{color:'#dd5656'}}>SCRYPTED discord server</a>
      </form>
      </center>
      </div>

     <FeaturesTiles  topDivider/>
    </>
  );
}

export default RequestTick;