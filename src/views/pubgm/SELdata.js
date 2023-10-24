import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { isMobile } from 'react-device-detect';
import { Chart } from "react-google-charts";

import '../Sel.css'
const selFirebase =   firebase.initializeApp({
    apiKey: "AIzaSyDxOcHHQhU6egLr2ZkgMlKmqv8dN4z7EAo",
    authDomain: "scrypted-lcs.firebaseapp.com",
    projectId: "scrypted-lcs",
    storageBucket: "scrypted-lcs.appspot.com",
    messagingSenderId: "449386524331",
    appId: "1:449386524331:web:9c7b03c26e3814f92fd1ee",
    measurementId: "G-WJ60BYCL9Z"
  }, "SEL");

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

function Fraggers(){
    const[fraggers, setFraggers] = useState([]); 
     let fragger=[];
    useEffect(()=>{ 
    selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
        let fraggerstitent;
        fraggerstitent = doc.data().finalFraggers;
        for(let i = 0; i<fraggerstitent.length; i++){
            if(fragger.length<6)
            for(let j=0; j<fraggerstitent[i].player.length; j++){
                if(fragger.length<6){
                if(fraggerstitent[i].player[j].image !== undefined){
                    fragger.push({
                        name: fraggerstitent[i].player[j].name,
                        image: fraggerstitent[i].player[j].image,
                        kills: fraggerstitent[i].player[j].kills,
                        logo: fraggerstitent[i].logo,
                        team: fraggerstitent[i].team,
                    })
                }
            }
            else
            break;
            }
            else
            break;
        }
        }).then(()=>{
            fragger.sort((a,b)=>a.kills > b.kills?-1:(b.kills>a.kills?1:0));
for(let i=1; i<=3; i++)
fragger.pop();
            setFraggers(fragger)
        })
    },[])
      return(
            <>
            {fraggers.length>0?
            <>
            <center><h2 style={{paddingBottom:30}}>FEATURED FRAGGERS</h2></center>
                 <div className="containerS" style={{paddingBottom:50}}>
<div className="rowS">
    {fraggers.map((player, index)=>(
        <div className="columnS" key={index}>
    <div className="cardS">
      <div className="contentS">
        <div className="frontS">
          <img className="profileS"  style={{width:'200px', height:'200px', margin:'auto'}}  src={player.image} alt={player.name} />
          <h3><span  style={{fontSize:25, color:'#a8d406'}}>{player.name}</span><br/><span style={{color:'#8d248a', fontSize:23}}>{player.kills} kills</span></h3>
        </div>
        <div className="backS from-leftS">
          <img className="tem-imgS" style={{maxWidth:'200px', maxHeight:'200px', margin:'auto'}}
          src={player.logo} alt={player.team} />
            <h3>{player.team}</h3>
        </div>
      </div>
    </div>
  </div>
    ))}
  
  </div>
  </div>
                    
           </>
           :
           null
            }
            </>
        )
    }

function Consistent(){
    const[cons, setCons] = useState({}); 
     let consti = [];
    useEffect(()=>{ 
    selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
        let constitent;
        constitent = doc.data().result;
        constitent.sort((a,b)=>a.total > b.total?-1:(b.total>a.total?1:0));
        for(let i = 0; i<3; i++)
        consti.push(constitent[i])
        }).then(()=>{
            consti.sort((a,b)=>a.wwcd > b.wwcd?-1:(b.wwcd>a.wwcd?1:0));
            consti.sort((a,b)=>a.wwcd === b.wwcd && a.placement<b.placement?-1:(b.wwcd===a.wwcd && b.placement < a.placement?1:0));
            consti.sort((a,b)=>a.wwcd === b.wwcd && a.placement===b.placement && a.total<b.total?-1:(b.wwcd===a.wwcd && b.placement === a.placement && b.total<a.total?1:0));
            consti[consti.length-1].flag = `${flagLink}${countryFlags[ consti[consti.length-1].country]}.svg`
            setCons(consti[consti.length-1])
        })
    },[])
          
        return(
            <>
            {cons.name !== undefined?
            <>
            <center><h2>MOST CONSISTENT TEAM</h2></center>
            {isMobile?
     <div class="view">
         <ul class="card__list">
                            <li class="card__item card__item--blue">
                                <div class="card__info">
                                    <div class="info-player">
                                        <p class="info-player__num"><img src={cons.logo} style={{width:'100%'}}/></p>
                                        <p class="info-player__name">
                                            <small>{cons.code}</small><br/>{cons.name}</p>
                                    </div>
                                    <div class="info-place">{cons.wwcd}<sup>WWCD</sup></div>
                                </div>
                            </li>
                     </ul>
                     </div>
                :
                <>
                 <a href='#'><div className="single" >
                     <div className="card-container" style={{marginBottom:'100px'}}>
       <center><div className="card light" id="selConsistent">
                    <center style={{marginTop:'20px'}}>
                    <img style={{width:'150px', height:'150px'}} src={cons.logo} alt={cons.name} />
               {cons.name}<img className="flag" src={cons.flag} width='20px' height='20px'/>
               <p style={{color:'#8d248a'}}>{cons.wwcd} WWCD</p>
               </center>
                </div></center>
                    </div>
                    </div></a>
                    
            </>}
           </>
           :
           null
            }
            </>
        )
    }


    function Top4Teams(){
        const[topTeams, setTopTeams] = useState([])   
         let topTeamsg = [];
        useEffect(()=>{ 
        selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
            let topTeamsgg;
            topTeamsgg = doc.data().result;
            topTeamsgg.sort((a,b)=>a.total > b.total?-1:(b.total>a.total?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd>b.wwcd?-1:(b.total===a.total && b.wwcd > a.wwcd?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement>b.placement?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement > a.placement?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills>b.kills?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills > a.kills?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills === b.kills && a.matches>b.matches?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills === a.kills && b.matches > a.matches?1:0));
            for(let i = 0; i<4; i++){
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
                <center><h2>TOP 4 TEAMS</h2></center>

             <center><div style={{maxWidth: '500px'}}>
<Chart
width={'100%'}
height={'300px'}
chartType="ComboChart"
loader={<div><center><div id='loader' className="loader"></div></center></div>}
data={[
[
'Team',
'Placement',
'Kills',
'WWCD',
],
[topTeams[0].name , topTeams[0].placement,topTeams[0].kills, topTeams[0].wwcd],
[topTeams[1].name, topTeams[1].placement, topTeams[1].kills, topTeams[1].wwcd],
[topTeams[2].name, topTeams[2].placement, topTeams[2].kills, topTeams[2].wwcd],
[topTeams[3].name, topTeams[3].placement, topTeams[3].kills, topTeams[3].wwcd],
]}
options={{
legend: {position: 'none'},
vAxis: {
title: 'TOP 4',
titleTextStyle: {color:'#a8d406'},
textStyle:{color: '#FFF'}
},
hAxis: {
textStyle:{color: '#FFF'}
},
backgroundColor: 'black',
seriesType: 'bars',
series: { 5: { type: 'line' } },
colors: ['#a8d406','#8d248a', 'gold'],
}}
rootProps={{ 'data-testid': '1' }}
/>
</div>
</center>
</>
:
null
}                  
                </>
            )
        }

    function NonVegTeams(){
        const[nonVeg, setNonVeg] = useState([])   
         let nonVegg = [];
        useEffect(()=>{ 
        selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
            let nonVeggie;
            nonVeggie = doc.data().result;
            nonVeggie.sort((a,b)=>a.wwcd > b.wwcd?-1:(b.wwcd>a.wwcd?1:0));
            nonVeggie.sort((a,b)=>a.wwcd === b.wwcd && a.placement>b.placement?-1:(b.wwcd===a.wwcd && b.placement > a.placement?1:0));
            nonVeggie.sort((a,b)=>a.wwcd === b.wwcd && a.placement===b.placement && a.total>b.total ?-1:(b.wwcd===a.wwcd && b.placement === a.placement && b.total>a.total?1:0));
            for(let i = 0; i<4; i++){
                nonVeggie[i].flag = `${flagLink}${countryFlags[ nonVeggie[i].country]}.svg`
               nonVegg.push(nonVeggie[i]) 
            }
            
            }).then(()=>{
                setNonVeg(nonVegg)
            })
        },[])
            return(
                <>
                {nonVeg.length>0?
                <>
                <center><h2>NON-VEG TEAMS</h2></center>
                {/* {nonVeg.length<=0?
                <center><div id='loader' className="loader"></div></center>
                :
                <>
                {isMobile?
         <div class="view">
             <ul class="card__list">
                         {nonVeg.map((team, index) => (
                                <li class="card__item card__item--blue">
                                    <div class="card__info">
                                        <div class="info-player">
                                            <p class="info-player__num"><img src={team.logo} style={{width:'100%'}}/></p>
                                            <p class="info-player__name"><small>{team.code}</small><br/>{team.name}</p>
                                        </div>
                                        <div class="info-place">{team.wwcd}<sup>WWCD</sup></div>
                                    </div>
                                </li>
                         ))
                         }
                         </ul>
                         </div>
                 
                    :
                    <>
                     <div className="card-container" style={{marginBottom:'100px'}}>
                    {nonVeg.map((team, index) => (
            
            <a href='#'> <div className="card light" key={index}>
                        <center style={{marginTop:'20px'}}>
                        <img style={{width:'150px', height:'150px'}} src={team.logo} alt={team.name} />
                   {team.name}<img className="flag" src={team.flag} width='20px' height='20px'/>
                   <p style={{color:'#8d248a'}}>{team.wwcd} WWCD</p>
                   </center>
                    </div></a>
            
                        ))}
                        </div>
                    </>}
                </>
            }                          */}


<center><div style={{maxWidth: '500px'}}>
<Chart
  width={'100%'}
 height={'300px'}
  chartType="ComboChart"
  loader={<div><center><div id='loader' className="loader"></div></center></div>}
  data={[
    [
      'Team',
      'WWCD',
    ],
    [nonVeg[0].name , nonVeg[0].wwcd],
    [nonVeg[1].name, nonVeg[1].wwcd],
    [nonVeg[2].name, nonVeg[2].wwcd],
    [nonVeg[3].name, nonVeg[3].wwcd],
  ]}
  options={{
    legend: {position: 'none'},
    vAxis: {
        title: 'WWCD',
        titleTextStyle: {color:'#c9850a'},
        textStyle:{color: '#FFF'}
    },
    hAxis: {
        textStyle:{color: '#FFF'}
    },
    backgroundColor: 'black',
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    colors: ['#c9850a'],
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
</center>
</>
:
null
    }
                </>
            )
        }


        function AggressiveTeams(){
            const[aggressive, setAggressive] = useState([])   
             let aggressiveg = [];
            useEffect(()=>{ 
            selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
                let aggressivegg;
                aggressivegg = doc.data().result;
                aggressivegg.sort((a,b)=>a.kills > b.kills?-1:(b.kills>a.kills?1:0));
                aggressivegg.sort((a,b)=>a.kills === b.kills && a.placement<b.placement?-1:(b.kills===a.kills && b.placement < a.placement?1:0));
                for(let i = 0; i<4; i++){
                    aggressivegg[i].flag = `${flagLink}${countryFlags[aggressivegg[i].country]}.svg`
                    aggressiveg.push(aggressivegg[i]) 
                }
                }).then(()=>{
                    setAggressive(aggressiveg)
                })
            },[])
                return(
                    <>
                    {aggressive.length>0?
                    <>
                    <center><h2>MOST AGGRESSIVE TEAMS</h2></center>
                    {/* {aggressive.length<=0?
                     <center><div id='loader' className="loader"></div></center>
                    :
                    <>
                     {isMobile?
             <div class="view">
                 <ul class="card__list">
                             {aggressive.map((team, index) => (
                                    <li class="card__item card__item--blue">
                                        <div class="card__info">
                                            <div class="info-player">
                                                <p class="info-player__num"><img src={team.logo} style={{width:'100%'}}/></p>
                                                <p class="info-player__name"><small>{team.code}</small><br/>{team.name}</p>
                                            </div>
                                            <div class="info-place">{team.kills}<sup>kills</sup></div>
                                        </div>
                                    </li>
                             ))
                             }
                             </ul>
                             </div>
                     
                        :
                        <>
                         <div className="card-container" style={{marginBottom:'100px'}}>
                        {aggressive.map((team, index) => (
                
                <a href='#'><div className="card light" key={index}>
                            <center style={{marginTop:'20px'}}>
                            <img style={{width:'150px', height:'150px'}} src={team.logo} alt={team.name} />
                       {team.name}<img className="flag" src={team.flag} width='20px' height='20px'/>
                       <p style={{color:'#8d248a'}}>{team.kills} kills</p>
                       </center>
                        </div></a>
                
                            ))}
                            </div>
                        </>}
                    </>
                    }                    */}
                    <center><div style={{maxWidth: '500px'}}>
<Chart
  width={'100%'}
 height={'300px'}
  chartType="ComboChart"
  loader={<div><center><div id='loader' className="loader"></div></center></div>}
  data={[
    [
      'Team',
      'Kills',
    ],
    [aggressive[0].name , aggressive[0].kills],
    [aggressive[1].name, aggressive[1].kills],
    [aggressive[2].name, aggressive[2].kills],
    [aggressive[3].name, aggressive[3].kills],
  ]}
  options={{
    legend: {position: 'none'},
    vAxis: {
        title: 'KILLS',
        titleTextStyle: {color:'#8d248a'},
        textStyle:{color: '#FFF'}
    },
    hAxis: {
        textStyle:{color: '#FFF'}
    },
    backgroundColor: 'black',
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    colors: ['#8d248a'],
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
</center>
</>
:
null
        }
                    </>
                )
            }


            function SurvivalSpecialist(){
                const[survival, setSurvival] = useState([])   
                 let survivalg = [];
                useEffect(()=>{ 
                selFirebase.firestore().collection("boards").doc("SEL").get().then((doc)=>{
                    let survivalgg;
                    survivalgg = doc.data().result;
                    survivalgg.sort((a,b)=>a.placement > b.placement?-1:(b.placement>a.placement?1:0));
                    survivalgg.sort((a,b)=>a.placement === b.placement && a.wwcd<b.wwcd?-1:(b.placement===a.placement && b.wwcd < a.wwcd?1:0));
                    for(let i = 0; i<4; i++){
                        survivalgg[i].flag = `${flagLink}${countryFlags[ survivalgg[i].country]}.svg`
                        survivalg.push(survivalgg[i]) 
                    }
                    }).then(()=>{
                        setSurvival(survivalg)
                    })
                },[])
                    return(
                        <>
                        {survival.length>0?
                        <>
                        <center><h2>SURVIVAL SPECIALISTS</h2></center>
                        {/* {survival.length<=0?
                        <center><div id='loader' className="loader"></div></center>
                    :
                    <>
                    {isMobile?
                 <div class="view">
                     <ul class="card__list">
                                 {survival.map((team, index) => (
                                        <li class="card__item card__item--blue">
                                            <div class="card__info">
                                                <div class="info-player">
                                                    <p class="info-player__num"><img src={team.logo} style={{width:'100%'}}/></p>
                                                    <p class="info-player__name"><small>{team.code}</small><br/>{team.name}</p>
                                                </div>
                                                <div class="info-place">{team.placement}<sup>placement</sup></div>
                                            </div>
                                        </li>
                                 ))
                                 }
                                 </ul>
                                 </div>
                         
                            :
                            <>
                             <div className="card-container" style={{marginBottom:'100px'}}>
                            {survival.map((team, index) => (
                    
                    <a href='#'><div className="card light" key={index}>
                                <center style={{marginTop:'20px'}}>
                                <img style={{width:'150px', height:'150px'}} src={team.logo} alt={team.name} />
                           {team.name}<img className="flag" src={team.flag} width='20px' height='20px'/>
                           <p style={{color:'#8d248a'}}>{team.placement} placement</p>
                           </center>
                            </div></a>
                    
                                ))}
                                </div>
                            </>}
                    </>
                    }      */}

                     <center><div style={{maxWidth: '500px'}}>
<Chart
  width={'100%'}
 height={'300px'}
  chartType="ComboChart"
  loader={<div><center><div id='loader' className="loader"></div></center></div>}
  data={[
    [
      'Team',
      'Placement',
      'WWCD',
    ],
    [survival[0].name , survival[0].placement, survival[0].wwcd],
    [survival[1].name, survival[1].placement, survival[1].wwcd],
    [survival[2].name, survival[2].placement, survival[2].wwcd],
    [survival[3].name, survival[3].placement, survival[3].wwcd],
  ]}
  options={{
    legend: {position: 'none'},
    vAxis: {
        title: 'PLACEMENT',
        titleTextStyle: {color:'#a8d406'},
        textStyle:{color: '#FFF'}
    },
    hAxis: {
        textStyle:{color: '#FFF'}
    },
    backgroundColor: 'black',
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    colors: ['#a8d406', 'gold'],
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
</center>
</>
:
null
        }                  
                        </>
                    )
                }
    
export {NonVegTeams,Consistent,AggressiveTeams,SurvivalSpecialist,Top4Teams,Fraggers};