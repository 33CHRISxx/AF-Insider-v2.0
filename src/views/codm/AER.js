import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { isMobile } from 'react-device-detect';
import { Chart } from "react-google-charts";

import './zec.css'
const selFirebase =   firebase.initializeApp({
    apiKey: "AIzaSyDxOcHHQhU6egLr2ZkgMlKmqv8dN4z7EAo",
    authDomain: "scrypted-lcs.firebaseapp.com",
    projectId: "scrypted-lcs",
    storageBucket: "scrypted-lcs.appspot.com",
    messagingSenderId: "449386524331",
    appId: "1:449386524331:web:9c7b03c26e3814f92fd1ee",
    measurementId: "G-WJ60BYCL9Z"
  }, "SELOO");

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
let flagLink = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';


function AERtiers({lobby}){
    const boardID = `AERTier${lobby}`
    let tier;
    const[date,setDate] = useState('')
    tier = lobby==='A'?1:(lobby==='B'?2:3)
    const[topTeams, setTopTeams] = useState([])   
     let topTeamsg = [];
    useEffect(()=>{ 
    selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
        let topTeamsgg;
        setDate(doc.data().date);
        topTeamsgg = doc.data().result;
        topTeamsgg.sort((a,b)=>a.total > b.total?-1:(b.total>a.total?1:0));
        topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd>b.wwcd?-1:(b.total===a.total && b.wwcd > a.wwcd?1:0));
        topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement>b.placement?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement > a.placement?1:0));
        topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills>b.kills?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills > a.kills?1:0));
        topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills === b.kills && a.matches>b.matches?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills === a.kills && b.matches > a.matches?1:0));
        for(let i = 0; i<topTeamsgg.length; i++){
            topTeamsgg[i].flag = `${flagLink}${countryFlags[ topTeamsgg[i].country]}.svg`
            topTeamsg.push(topTeamsgg[i]) 
        }
        }).then(()=>{
            setTopTeams(topTeamsg)
        })
    },[])
        return(
            <>
            {topTeams.length>0?
            <>
         <center>
             <div className='AER'>
         <div className="holder" id={boardID} style={!isMobile?{maxWidth:'800px',overflowX:'auto'}:{overflowX:'auto'}} >
         <center><h2
    style={{color:'white', fontSize:'44px',marginLeft:'2%', letterSpacing:'2px'}}>
        <span className="h2Style">AER RANKING</span>
        <br/>
    <span style={tier===1?{color:'red',fontSize:'30px'}:{color:'orange',fontSize:'30px'}}>TIER {tier}</span>
    <br/>
    </h2></center>
          <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '600px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
        
                  </tr>
              </thead>
           <tbody>
      {topTeams.map((team, index) => (              
           <tr key={index} className='boardRows'>
           <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)'}}>
               <div className="team" style={{width: '100%'}}>
               <span style={{float:'left',fontStyle:'italic', color:'#dd5656', fontSize:18}}>#{index+1}.</span>
                   <div className="team-logo" style={{marginLeft:'10px'}}>
                       <img src={team.logo} alt={team.name}/>
               </div>
               <div className="team-name" style={{width: '100%', textAlign:'left'}}>{team.name}
               {
                   index < 6?
                   <span style={{float:'right', color:'red'}}> ↓</span>
                   :
               (index>11?
                <span style={{float:'right', color:'green'}}> ↑</span>
           :
           null
           )}
            </div>
           </div>
           </td>     
                 </tr>

           
      ))}
        </tbody>
        </table>
        <br/>
</div>       </div>
</center>
</>
:
<>
<center><div id='loader' className="loader"></div></center>
<br/>
</>
}                  
            </>
        )
    }

        
    
export {AERtiers};