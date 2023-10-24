import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { isMobile } from 'react-device-detect';

import './boards.css'

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


    function Board({lobby, heading}){
        const boardID = `${lobby}`
        const[topTeams, setTopTeams] = useState([])   
         let topTeamsg = [];
         const[date,setDate] = useState('')
         const[title, setTitle] = useState('')
        useEffect(()=>{ 
        firebase.firestore().collection("boards").doc(`${lobby}`).get().then((doc)=>{
            let topTeamsgg;
            setDate(doc.data().date);
            setTitle(doc.data().title);
            topTeamsgg = doc.data().result;
            topTeamsgg.sort((a,b)=>a.total > b.total?-1:(b.total>a.total?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd>b.wwcd?-1:(b.total===a.total && b.wwcd > a.wwcd?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement>b.placement?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement > a.placement?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills>b.kills?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills > a.kills?1:0));
            topTeamsgg.sort((a,b)=>a.total === b.total && a.wwcd === b.wwcd && a.placement === b.placement && a.kills === b.kills && a.matches>b.matches?-1:(b.total===a.total && b.wwcd === a.wwcd && b.placement === a.placement && b.kills === a.kills && b.matches > a.matches?1:0));
            for(let i = 0; i<topTeamsgg.length && i<20; i++){
                topTeamsgg[i].name = topTeamsgg[i].name.toUpperCase();
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
                 <div className='tnf' style={{marginBottom: '500px'}}>
             <div className="holder" id={boardID} style={!isMobile?{maxWidth:'800px',overflowX:'auto'}:{overflowX:'auto'}} >
                 <h3 className='board-name'><span style={{wordSpacing: 10, letterSpacing: 5, fontWeight: 'bolder'}}>{heading}</span>
                 <br/>
                 <span style={{fontSize:'25px', letterSpacing: 3, fontWeight: 'bolder', color:'#515151db',}}>{title}</span>
                 {/* <br/><span style={{fontSize:'20px'}}>{date}</span></h3> */}
                 </h3>
                 <table>
                  <thead><tr>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>#</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}>TEAM</th>
                      <th></th>
                      <th></th>
                      <th></th>
                          <th></th>
                          <th></th>
                      <th>{date}</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>WWCD</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>KILLS</th>
                      <th style={{border:' 0px solid rgb(219, 219, 219)'}}>TOTAL</th>

                      </tr>
                  </thead>
               <tbody>
          {topTeams.map((team, index) => (              
               <tr key={index} className='boardRows'>
               <td className='sn'><center>{index+1}.</center></td>
               <td colspan="7" style={{border:' 0px solid rgb(219, 219, 219)', wordSpacing: 5, fontWeight: 'bolder', fontSize:20}}>{team.name}</td>
               <td className='sn' style={{border:' 0px solid rgb(219, 219, 219)', fontWeight: 'bolder', fontSize:20}}>{team.wwcd}</td>
               <td style={{border:' 0px solid rgb(219, 219, 219)', fontWeight: 'bolder', fontSize:20}}>{team.kills}</td>
               <td className='sn' style={{border:' 0px solid rgb(219, 219, 219)', fontWeight: 'bolder', fontSize:20}}>{team.total}</td>
               
            </tr>

               
          ))}
            </tbody>
            </table>
     
            <table style={{width:'100%', margin:'0px'}} className='tnfFooter'>
        <tr>
        <td style = {{paddingLeft: '0px'}}>
            <div className="scrypted">
                <img className="scrypted1" />
                </div>
          </td>
          <td style={{paddingRight: '0px'}}>
         <div className="sponsor rel">
         <img className="sponsorimg1" /></div>
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


        
    
export {Board};