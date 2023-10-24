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
  }, "SELO");

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


function ZECtiers({lobby}){
    const boardID = `zecTier${lobby}`
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
             <div className='zec'>
         <div className="holder" id={boardID} style={!isMobile?{maxWidth:'800px',overflowX:'auto'}:{overflowX:'auto'}} >
             <h3 className='board-name'>AER RANKED SEASON 4<br/><span style={{fontSize:'25px',color:'gold'}}>TIER {tier}</span><br/><span style={{fontSize:'20px'}}>{date}</span></h3>
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
 
        <table style={{width:'100%', margin:'0px'}} className='zecFooter'>
    <tr>
    <td style = {{paddingLeft: '0px'}}>
        <div className="scrypted">
            <img className="scrypted1" />
            </div>
      </td>
      <td style={{paddingRight: '0px'}}>
         <div className="sponsor rel">
         <img className="sponsorimg1" /></div>
      <div className="sponsor rel">
          <img className="sponsorimg3" /></div>
      </td>
</tr>
</table>
</div>       </div>
</center>
</>
:
null
}                  
            </>
        )
    }


    function ZEC({lobby}){
        const boardID = `zec${lobby}`
        const[topTeams, setTopTeams] = useState([])   
         let topTeamsg = [];
         const[date,setDate] = useState('')
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
                 <div className='zec'>
             <div className="holder" id={boardID} style={!isMobile?{maxWidth:'800px',overflowX:'auto'}:{overflowX:'auto'}} >
                 <h3 className='board-name'>ZEC RANKED SEASON 4 ({lobby})<br/><span style={{fontSize:'25px',color:'gold'}}>TEAM STANDINGS</span>
                 <br/><span style={{fontSize:'20px'}}>{date}</span></h3>
              <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '800px'}}>
                  <thead><tr>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>#</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>TEAM</th>
                      <th></th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>MATCHES<br/>PLAYED</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>WINS</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>PLACE<br/>POINTS</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>KILLS<br/>POINTS</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>TOTAL<br/>POINTS</th>

                      </tr>
                  </thead>
               <tbody>
          {topTeams.map((team, index) => (              
               <tr key={index} className='boardRows'>
               <td className='sn'><center>{index+1}</center></td>
               <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)'}}><div className="team"><div className="team-logo"><img src={team.logo} alt={team.name}/></div><div className="team-name">{team.name}</div>
               </div>
               </td>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.matches}</td>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.wwcd}</td>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.placement}</td>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.kills}</td>
               <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.total}</td>
               
            </tr>

               
          ))}
            </tbody>
            </table>
     
            <table style={{width:'100%', margin:'0px'}} className='zecFooter'>
        <tr>
        <td style = {{paddingLeft: '0px'}}>
            <div className="scrypted">
                <img className="scrypted1" />
                </div>
          </td>
          <td style={{paddingRight: '0px'}}>
         <div className="sponsor rel">
         <img className="sponsorimg1" /></div>
      <div className="sponsor rel">
          <img className="sponsorimg3" /></div>
      </td>
  </tr>
    </table>
    </div>       </div>
</center>
</>
:
null
}                  
                </>
            )
        }

        function ZECkills({lobby}){
            const boardID = `zecKills${lobby}`
            const[date,setDate] = useState('')
            const[topTeams, setTopTeams] = useState([])   
             let topTeamsg = [];
            useEffect(()=>{ 
            selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
                setDate(doc.data().date);
                let topTeamsgg;
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
                     <div className='zec'>
                 <div className="holder" id={boardID} style={!isMobile?{maxWidth:'800px',overflowX:'auto'}:{overflowX:'auto'}} >
                     <h3 className='board-name'>ZEC RANKED SEASON 4 ({lobby})<br/><span style={{fontSize:'25px',color:'gold'}}>KILL STANDINGS</span><br/><span style={{fontSize:'20px'}}>{date}</span></h3>
                  <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '800px'}}>
                      <thead><tr>
                          <th style={{border:' 0px solid rgb(219, 219, 219)'}}>#</th>
                          <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>PLAYER</th>
                          <th></th> 
                          <th style={{border:' 0px solid rgb(219, 219, 219)'}}>MATCHES<br/>PLAYED</th>
                          <th style={{border:' 0px solid rgb(219, 219, 219)'}}>KILLS</th>
                          <th style={{border:' 0px solid rgb(219, 219, 219)'}}>K/M</th>
                          <th style={{border:' 0px solid rgb(219, 219, 219)'}}>TOTAL<br/>POINTS</th>
    
                          </tr>
                      </thead>
                   <tbody>
              {topTeams.map((team, index) => (              
                   <tr key={index} className='boardRows'>
                   <td className='sn'><center>{index+1}</center></td>
                   <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)'}}><div className="team"><div className="team-logo"><img src={team.logo} alt={team.name}/></div><div className="team-name">{team.name}</div>
                   </div>
                   </td>
                   <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.matches}</td>
                   <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.placement}</td>
                   <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.kills}</td>
                   <td style={{border:' 0px solid rgb(219, 219, 219)'}}>{team.total}</td>
                   
                </tr>
    
                   
              ))}
                </tbody>
                </table>
         
                <table style={{width:'100%', margin:'0px'}} className='zecFooter'>
            <tr>
            <td style = {{paddingLeft: '0px'}}>
                <div className="scrypted">
                    <img className="scrypted1" />
                    </div>
              </td>
         
         <td style={{paddingRight: '0px'}}>
         <div className="sponsor rel">
         <img className="sponsorimg1" /></div>
      <div className="sponsor rel">
          <img className="sponsorimg3" /></div>
      </td>
      </tr>
        </table>
        </div>       </div>
    </center>
    </>
    :
    null
    }                  
                    </>
                )
            }

        
    
export {ZECtiers, ZEC, ZECkills};