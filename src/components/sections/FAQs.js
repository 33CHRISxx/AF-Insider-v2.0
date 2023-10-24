import React, { useEffect } from 'react';
// import sections
import Hero from '../sections/Hero';
import FeaturesTiles from '../sections/FeaturesTiles';



function FAQs() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <Hero/>
  
    <div className='container'>
    <center><h1>FAQs</h1>
 <details>
   <summary>How do I submit my team details</summary>
   <p>
        To submit or update your team details, kindly open Insider ticket on <a className="button button-primary button-wide-mobile button-sm" href='https://discord.gg/jVdbTvuEQe'>SCRYPTED ESPORTS</a> discord sever
        </p>	 
 </details>
 <details>
   <summary>How do I search for team</summary>
   <p>Each team is assigned a team code which can be used to access the teams' details. This team code is usually the team_tag#team_country_code. Example: 4kT#234<br/>Kindly refer to <a style={{color:'#dd5656'}} href='https://discord.gg/jVdbTvuEQe'>insider-team-codes</a> (Scrypted discord server) for a list of available team codes</p>
 </details>
 <details>
   <summary>Why is a teams' estimated earnings $0</summary>
   <p>This usually happens when we do not have the teams' earnings while adding the team to our database.<br/>
    If that happens to be your team, please <a style={{color:'#dd5656'}} href='/Sponsor'>contact us</a> to update it</p>
 </details>
 <details>
   <summary>I want a dedicated page/url for my team</summary>
   <div style={{marginTop:'20px', color:'black'}}>To get a url for your team, you will need to either<br/><br/>
   <ul>
       <li>Be one of our sponsors</li>
       <li>Win a high tier event (PMCO)</li>
       <li>Subscribe for our monthly package ($5 / #2000)</li>
       <li>Exchange earnings from our partners</li></ul>
You can also get our Silver or Gold package by <a style={{color:'#dd5656'}} href='/Sponsor'>being a sponsor</a></div>
To subscribe, kindly open Insider ticket on <a style={{color:'#dd5656'}} href='https://discord.gg/jVdbTvuEQe'>SCRYPTED ESPORTS</a> discord sever
        
 </details>
 <details>
   <summary>How can I sponsor/partner</summary>
   <p>To partner with us, or to sponsor this platform, kindly check out our <a style={{color:'#dd5656'}} href='/Sponsor'>Sponsor Page</a></p>
   </details>
   <details>
   <summary>How is the team ranking done</summary>
   <div style={{marginTop:'20px', color:'black'}}>We classify events and tournaments into 4 classes (S, A, B, C)
     <li><u>S Class:</u> Events with $50,000+ prize pool</li>
     <li><u>A Class:</u> Events with $20,000+ prize pool</li>
     <li><u>B Class:</u> Events with $10,000+ prize pool</li>
     <li><u>C Class:</u> Events with $1,000+ prize pool</li>
     <br/>Not all $1,000 events are classified as Class C
     <br/>Using the same point table for all events, each class has a multiplication point. This multiplication point is then multiplied with the point table value to determine the points earned by a team from a particular event.
     <li><u>S Class:</u> 1</li>
     <li><u>A Class:</u> 0.8</li>
     <li><u>B Class:</u> 0.5</li>
     <li><u>C Class:</u> 0.2</li>
     
     <br/>
       <b><u>Decay System (10% monthly)</u></b>
       <br/>Points are awarded to teams after the event/tournament has ended.
       <br/> Every month, the points earned by the participants of that event is reduced by 10%.
       <br/>
       After 10 months, the event/tournament points must have been fully deducted from the participants of the event/tournament
   
   </div>
 </details>
 <details>
   <summary>Can I join INSIDER team</summary>
   <p>Kindly inform us of how you can be of help to AF ESPORTS INSIDER : <a style={{color:'#dd5656'}} href='/Contact'>Contact us</a></p>
 </details>
 </center>
    </div>


    </>
  );
}

export default FAQs;