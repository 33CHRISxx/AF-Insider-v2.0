import React, {useState, useEffect} from 'react';




function Teams() {
  const[count,setCount] = useState(0);
  const [teamDet, setTeamDet] = useState({});
const [teamOrg, setTeamOrg] = useState('');
const [teamMembers, setTeamMembers] = useState([]);
const [teamAchievements, setTeamAchievements] = useState([]);
useEffect(() => {
  window.scrollTo(0, 0)
  return () => {
  }
}, [])
fetch('/api/pubgm/AE%23234').then(response => response.json()).then((team)=>
{
    console.log(team);
})
// if(teamCode !== 'insider'){
//   let db = firebase.firestore();
//   db.collection("PUBGMteams").doc(teamCode).get().then((doc) => {
//     if (doc.exists) {
//        setTeamDet(doc.data());
//        let tMembers = [];
//        let tAchievements = [];
//        for(let i=0; i<doc.data().members.length; i++) {
//          if(doc.data().members[i].link !== '')
//          tMembers.push(<li key={i}><a href={doc.data().members[i].link} target='blank'>{doc.data().members[i].name}</a></li>);
//          else
//          tMembers.push(<li key={i}>{doc.data().members[i].name}</li>);
//        }
//        for(let i=0; i<doc.data().achievements.length; i++) {
//        if(doc.data().achievements[i].link !== '')
//          tAchievements.push(<li key={i}><a href={doc.data().achievements[i].link} target='blank'>{doc.data().achievements[i].name}</a></li>);
//          else
//          tAchievements.push(<li key={i}>{doc.data().achievements[i].name}</li>);
//        }
//        setTeamMembers(tMembers);
//        setTeamAchievements(tAchievements);
//        setCount(count+1);
//        if(doc.data().org.link === undefined)
//        setTeamOrg('');
//        else
//        setTeamOrg(<a href={teamDet.org.link} target='blank'>{teamDet.org.name}</a>);
//     } else {
//       setCount(-1);
//     }
// }).catch((error) => {
//     // console.log("Error getting document:", error);
// });

    
  return (
    <>
    <div>Hel;oowoww</div>
  {/* {count > 0 ? (

    <div id='teamDiv' className="teamDiv">
    <center style={{marginTop: '-150px'}}><img style={{background:'black', width:'200px', height:'200px'}} src={teamDet.logo} alt={teamCode} width='200px' height='200px'/>
  </center>
  
  <center style={{marginTop: '15px', marginBottom: '15px'}}><b>{teamDet.name}</b><br/>{teamDet.code}</center>
  <table>
      <tbody>
<tr>
  <th>Country:</th>
  <td>{teamDet.country}</td>
</tr>
<tr>
  <th>Organization:</th>
  <td>{teamOrg}</td>
</tr>
<tr>
  <th>Estimated earnings:</th>
  <td>${teamDet.earnings}</td>
</tr>
<tr>
  <th>Members:</th>  
  <td className="teamMembers">{teamMembers}</td>      
</tr>  
<tr>
  <th>Achievements:</th>  
  <td className="teamMembers">{teamAchievements}</td>      
</tr> 
{/* <tr>
  <th>Scryted Coin:</th>
  <td>232</td>
</tr> */}
{/* </tbody>
</table>
  {teamDet.social !== '' ?(<center><a href={teamDet.social} target='blank'><img src=
'https://firebasestorage.googleapis.com/v0/b/afinsider-ea483.appspot.com/o/webPNG.png?alt=media&token=ddc8f7ed-2505-4113-91e2-714cacf4e9dc'
width='30px' height='30px' alt={teamDet.social} /></a></center>)
:(<center></center>)}


  </div>

  ) : count===-1 ? (
    <center><div id='teamError'>Team not found <br/> <Link to="/Contact" style={{color:'red'}}>Contact us</Link> to submit team....</div></center>
  )
  : <center><div id='loader' className="loader"></div></center>}

     */}
    
    </>
 );
 } 
// }
// else
// return ('');
// }


export default Teams;