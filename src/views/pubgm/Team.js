import React, { useState, useEffect } from 'react';
import '../../App.css';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom'
var FileSaver = require('file-saver');




function Team({ teamCode }) {
  const [count, setCount] = useState(0);
  const [teamDet, setTeamDet] = useState({});
  const [teamOrg, setTeamOrg] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamAchievements, setTeamAchievements] = useState([]);
  useEffect(async () => {
    window.scrollTo(0, 0)
    // let db = firebase.firestore();
    // let teams = [];
    // const snapshot = await db.collection("PUBGMteams").get();
    // if (snapshot.docs.length > 0) {
    //   snapshot.docs.map((doc, index) => {
    //     teams.push({
    //       name: doc.data().name,
    //       logo: doc.data().logo,
    //       tag: doc.data().tag,
    //       country: doc.data().country,
    //       code: doc.data().code,
    //     })
    //   })
    // }
    // var blob = new Blob([JSON.stringify(teams)], { type: "text/plain;charset=utf-8" });
    // FileSaver.saveAs(blob, "insider teams.txt");
    // console.log(teams)

  }, [])
  if (teamCode !== 'insider') {
    let db = firebase.firestore();
    db.collection("PUBGMteams").doc(teamCode).get().then((doc) => {
      if (doc.exists) {
        setTeamDet(doc.data());
        let tMembers = [];
        let tAchievements = [];
        for (let i = 0; i < doc.data().members.length && i < 7; i++) {
          if (doc.data().members[i].link !== '')
            tMembers.push(<li key={i}><a href={doc.data().members[i].link} target='blank'>{doc.data().members[i].name}</a></li>);
          else
            tMembers.push(<li key={i}>{doc.data().members[i].name}</li>);
        }
        for (let i = 0; i < doc.data().achievements.length; i++) {
          if (doc.data().achievements[i].link !== '')
            tAchievements.push(<li key={i}><a href={doc.data().achievements[i].link} target='blank'>{doc.data().achievements[i].name}</a></li>);
          else
            tAchievements.push(<li key={i}>{doc.data().achievements[i].name}</li>);
        }
        setTeamMembers(tMembers);
        setTeamAchievements(tAchievements);
        setCount(count + 1);
        if (doc.data().org.link === undefined)
          setTeamOrg('');
        else
          setTeamOrg(<a href={teamDet.org.link} target='blank'>{teamDet.org.name}</a>);
      } else {
        setCount(-1);
      }
    }).catch((error) => {
      // console.log("Error getting document:", error);
    });


    return (
      <>
        {count > 0 ? (

          <div id='teamDiv' className="teamDiv">
            <center style={{ marginTop: '-150px' }}><img style={{ background: 'black', width: '200px', height: '200px' }} src={teamDet.logo} alt={teamCode} width='200px' height='200px' />
            </center>

            <center style={{ marginTop: '15px', marginBottom: '15px' }}><b>{teamDet.name}</b><br />{teamDet.code}</center>
            <hr />
            <table>
              <tbody>

                <tr style={{ background: '#202020' }}>
                  <th>Country:</th>
                  <td>{teamDet.country}</td>
                </tr>
                {teamOrg !== '' ?
                  <tr>
                    <th>Organization:</th>
                    <td>{teamOrg}</td>
                  </tr>
                  :
                  null
                }
                {teamDet.earnings !== 0 ?
                  <tr style={{ background: '#202020' }}>
                    <th>Estimated earnings:</th>
                    <td>${teamDet.earnings}</td>
                  </tr>
                  :
                  null
                }
                <tr>
                  <th>Members:</th>
                  <td className="teamMembers">{teamMembers}</td>
                </tr>
                <tr style={{ background: '#202020' }}>
                  <th>Achievements:</th>
                  <td className="teamMembers">{teamAchievements}</td>
                </tr>
                {/* <tr>
  <th>Scryted Coin:</th>
  <td>232</td>
</tr> */}
              </tbody>
            </table>
            {teamDet.social !== '' ? (<center><a href={teamDet.social} target='blank' className='teamSocialIcon'><img src=
              'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/web.png?alt=media&token=70e6518a-3a3d-43b0-8e12-c1faf93e3d26'
              width='30px' height='30px' alt={teamDet.social} /></a></center>)
              : (<center></center>)}


          </div>

        ) : count === -1 ? (
          <center><div id='teamError'>Team not found <br /> <Link to="/Contact" style={{ color: 'red' }}>Contact us</Link> to submit team....</div></center>
        )
          : <center><div id='loader' className="loader"></div></center>}



      </>
    );
  }
  else
    return ('');
}


export default Team;