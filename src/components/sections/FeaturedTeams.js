// import React, { useState } from 'react';
// import Teams from '../../views/pubgm/ranking/data/top32Data'
// import '../../views/pubgm/ranking/data/ranking.css'


// function FeaturedTeams() {
//     const [teamCode, setTeamCode] = useState('insider')
//     Teams.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0));
//     let topTeams = [];
//     let flagLink = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/';
//     let k = 1;
//     while(k < 5)
//     {
//         let j = Math.round(Math.random() * 30);
//         if(!topTeams.includes(Teams[j]) && Teams[j].logo !== 'toDo') {
//           const flagCode = Teams[j].flag + '.svg';
//           Teams[j].flagCopy = flagLink.concat(flagCode);
//         topTeams.push(Teams[j]);
//         k++;
//     }
//     }

//     return(
//         <>
//         <center><h2>Featured Teams</h2></center>
//         <div className="card-container" style={{marginBottom:'100px'}}>
//         {topTeams.map((team, index) => (

//         <div className="card light" key={index} onClick = {() => setTeamCode(team.code)}>
//             <center style={{marginTop:'50px'}}>
//             <img style={{width:'150px', height:'150px'}} src={team.logo} alt={team.name} />
//        <span>{team.name} <img style={{width:'30px', height:'30px'}} src={team.flagCopy} /></span>
//        </center>
//         </div>

//             ))}
//             </div>
//         </>
//     )
// }

// export default FeaturedTeams;