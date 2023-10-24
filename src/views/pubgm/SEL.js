import React, { useState, useEffect } from 'react';
import { AggressiveTeams, Consistent, Fraggers, NonVegTeams, SurvivalSpecialist, Top4Teams } from './SELdata';
import Hero from '../../components/sections/Hero';
import Team from './Team';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import FeaturesTiles from '../../components/sections/FeaturesTiles';

const semi = [{
  name: 'G3 Temper',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/868952809054277652/image0.png',
  code: 'G3#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
{
  name: 'Slime 4kT',
  logo: 'https://media.discordapp.net/attachments/811122196625358860/811365013562195988/slime_4kt_png.png?width=499&height=499',
  code: '4kT#347',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg'
},
{
  name: 'KHK Africa',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2Fimage0.png?alt=media&token=f6725d9f-b449-41bf-98bd-bd8150944d08',
  code: 'khk#244',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AO.svg'
},
{
  name: 'Immortalz',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2F1613567117310.png?alt=media&token=99a9e618-50c8-44e1-b57f-a2d3db01a387',
  code: 'ITZ#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
{
  name: 'Black Jack Esports',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2FBJE.jpg?alt=media&token=0a6fbe33-abff-4126-a3b9-c97109c2242d',
  code: 'bje#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
{
  name: 'Team Somalia',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/877201760199016458/image0.png',
  code: 'PN#252',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SO.svg'
},
{
  name: 'Nibble Esports',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2FNBes.jpg?alt=media&token=adb1c505-e8f6-48e3-951d-09ffeda157ea',
  code: 'NBes#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
{
  name: 'Aphelion Apex',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2FAE%23234%2Flogo.png?alt=media&token=20bce8cb-e64b-4309-a35c-8ede1fd55fe3',
  code: 'AE#234',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg'
},
{
  name: 'See Esports',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/868965290673860608/photo.jpg',
  code: 'see#225',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CI.svg'
},
{
  name: 'Team BBC',
  logo: 'https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2FWhatsApp%20Image%202021-04-07%20at%2012.20.12.jpeg?alt=media&token=ed068824-252f-4ca0-b820-a96d5453db1b',
  code: 'BBC#230',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MU.svg'
},
{
  name: 'Eraser Crew',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/871517311750778941/received_565009521338078.jpeg',
  code: 'era#261',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MG.svg'
},
{
  name: 'Gamers Unite Nations',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/869123585632010280/image0.png',
  code: 'gun#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
{
  name: 'Honored Souls AF',
  logo: 'https://cdn.discordapp.com/attachments/868813362610450482/868958152006193192/image0.png',
  code: 'souls#27',
  flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg'
},
]
function SEL(){
document.body.className='sel';
  
function setCode(a){
  setTCode(a);
  window.scrollTo(0, 0);
}
const [tCode, setTCode] = useState('insider');
useEffect(() => {
  window.scrollTo(0, 0)
  return () => {
  }
}, [])

if(tCode === 'insider'){
  return (
    <>
<h2
    style={{color:'#A8D406', fontSize:'44px',marginLeft:'2%',marginTop:'200px', letterSpacing:'2px'}}>
        SCRYPTED ELITE LEAGUE (SEL)
        <br/>
    {/* <span style={{color:'#fff',fontSize:'30px'}}>SEASON 1</span>
    <br/> */}
   
    </h2>
    <div  style={{color:'#A8D406',paddingLeft:'10px',paddingRight:'10px', fontSize:'44px',marginLeft:'2%', letterSpacing:'2px'}}>
 <span style={{fontSize:'25px',}}>
 <a href='https://discord.gg/jVdbTvuEQe' style={{color:'#8d248a'}} target='_blank'>🎮 SCRYPTED ESPORTS</a></span>
    <br/>
    {/* <span style={{color:'#8d248a',fontSize:'25px'}}>💰 $450</span>
    <br/> */}
    <span style={{fontSize:'20px', fontStyle: 'italic' }}>
      <a href='https://www.youtube.com/c/CROWNZxxPUBGm' style={{color:'gold'}} target='_blank'>📺 @CROWNZxx</a></span>
    </div>

<div style={{marginTop: 50,}}>
    <CollapsibleComponent>
    <CollapsibleHead isExpanded={true} className="collapsibleHeadOdd">
                        SEASON 2
                    </CollapsibleHead>
                    <CollapsibleContent isExpanded={true} className="collapsibleContent">
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>MODE:</span>
                    <br/>
                   SQUADS (TPP)
                    <br/>
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>PRIZE POOL:</span>
                    <br/>
                   TBD
                    <br/>
                      <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>SPONSORS:</span>
                    <br/>
                    <span style={{fontSize:16}}>
                      Want to sponsor this event? DM <a href='https://www.instagram.com/scrypted_esport/' target='_blank' style={{color:'#8d248a'}}>@SCRYPTED</a></span>

                    <br/>
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>CASTERS:</span>
                    <br/>
                    TBD
                      <center><h2 style={{letterSpacing:'2px', wordSpacing:'5px'}}>FINALS INVITED</h2></center>
                  <div className="single"  onClick = {()=> setCode('INF#27')}>
                     <div className="card-container" style={{marginBottom:'100px'}}>
       <center><div className="card light" id="selConsistent">
                    <center style={{marginTop:'20px'}}>
                    <img style={{width:'150px', height:'150px'}}
                    src='https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/logos%2Finf.png?alt=media&token=0fa1cf47-fc15-4f19-88ec-57b82daaac74' alt='INF' />
               Influence Rage Africa<br/><img className="flag" src='https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg' width='20px' height='20px'/>
               </center>
                </div></center>
                    </div>
                    </div>

                    <center><h2 style={{letterSpacing:'2px', wordSpacing:'5px'}}>INVITED</h2></center>
                    <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
        
                  </tr>
              </thead>
           <tbody>
      {semi.map((team, index) => (              
           <tr key={index} className='boardRows'>
           <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)', borderRight:'100px solid red'}}>
               <div className="team" style={{width: '100%'}}>
                   <div className="team-logo" style={{marginLeft:'10px'}}>
                       <img src={team.logo} alt={team.name}/>
               </div>
               <div className="team-name"
               style={{width: '100%', textAlign:'left'}} 
               onClick = {()=> setCode(team.code)}>
                 {team.name}
            </div>
           </div></td>
           <td style={{float:'right', color:'green'}}>
             <img className="flag"
             src={team.flag} style={{borderRadius:0}} width='20px' height='20px'/>
           </td>
           
                 </tr>

      ))}
        </tbody>
        </table>

        <center><h2 style={{letterSpacing:'2px', wordSpacing:'5px'}}>QUALIFIED</h2></center>
                    <table style={{border:' 0px solid rgb(219, 219, 219)', maxWidth: '900px'}}>
              <thead><tr>
                  <th style={{border:' 0px solid rgb(219, 219, 219)', textAlign:'left'}}></th>
                  <th></th>
        
                  </tr>
              </thead>
           <tbody>            
           <tr  className='boardRows'>
           <td colspan="2" style={{border:' 0px solid rgb(219, 219, 219)'}}>
               <div className="team" style={{width: '100%'}}>
                   <div className="team-logo" style={{marginLeft:'10px'}}>
                       <img src='https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/whiteInsider.png?alt=media&token=0d95d116-8742-4b88-8b4e-65a5675add67' alt='TBD'/>
               </div>
               <div className="team-name" style={{width: '100%', textAlign:'left'}}>TBD
                <span style={{float:'right', color:'green'}}> ↑</span>
            </div>
           </div>
           </td>     
                 </tr>
           
        </tbody>
        </table>
                    </CollapsibleContent>

                    <CollapsibleHead className="collapsibleHeadEven">
                       SEASON 1
                    </CollapsibleHead>
                    <CollapsibleContent className="collapsibleContent">
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>MODE:</span>
                    <br/>
                   SQUADS (TPP)
                    <br/>
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>PRIZE POOL:</span>
                    <br/>
                   $450 USD
                    <br/>
                      <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>SPONSORS:</span>
                    <br/>
                    <a href='https://www.instagram.com/last_vengancenation/' style={{color:'white'}}>LAST VENGEANCE</a><br/>
                    <a href='https://www.instagram.com/menofblood_pubg/' style={{color:'white'}}>MEN OF BLOOD ESPORTS</a>

                    <br/>
                    <br/>
                    <span style={{color:'gold',fontSize:'18px', letterSpacing:'2px', marginTop:10, fontWeight: 'bold'}}>CASTERS:</span>
                    <br/>
                    <a href='https://www.youtube.com/c/CROWNZxxPUBGm' style={{color:'white'}}>CROWNZxx</a><br/>
                    <a href='https://www.youtube.com/channel/UC_cCDRDJ5YSXzDaQCpEg0kg' style={{color:'white'}}>ACTFIRE</a>

                        <Fraggers/>
    <Top4Teams/>
    <Consistent />
   <NonVegTeams/>
   <AggressiveTeams/>
   <SurvivalSpecialist/>
                    </CollapsibleContent>

                </CollapsibleComponent>
</div>
</>
  );
}
else
return(<>
<Hero/>
<Team teamCode = {tCode} />
<div className='container' style={{marginTop:'30px', marginBottom: '30px'}}>
    <center>
    <button type='button' className="button button-primary button-wide-mobile button-sm" onClick={() => setCode('insider')}>Back</button></center>
  </div>
</>
)
}


export default SEL;