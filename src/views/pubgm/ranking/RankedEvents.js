import React, { useState, useEffect } from 'react';
import './ranking.css'
import Hero from '../../../components/sections/Hero';
import FeaturesTiles from '../../../components/sections/FeaturesTiles';
import Team from '../Team';
import { round } from 'lodash';
import firebase from 'firebase';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
  'Ivory Coast': 'CI',
  'Mauritius': 'MU',
}
const RankedEvent = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState('thinking...')
  useEffect(() => {
    firebase.firestore().collection('PUBGM').doc('Ranking').get().then((doc) => {
      setDate(doc.data().date);
      setEvents(doc.data().events)
    })

  }, [])

  let flagLink = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';
  events.sort((a, b) => (a.month > b.month) ? -1 : ((b.month > a.month) ? 1 : 0));
  events.sort((a, b) => (a.month > b.month) ? -1 : ((b.month > a.month) ? 1 : 0));
  for (let i = 0; i < events.length; i++) {
    events[i].teams.sort((a, b) => (a.point > b.point) ? -1 : ((b.point > a.point) ? 1 : 0));
    events[i].teams.sort((a, b) => (a.point > b.point) ? -1 : ((b.point > a.point) ? 1 : 0));
    for (let j = 0; j < events[i].teams.length; j++) {
      const flagCode = countryFlags[events[i].teams[j].country] + '.svg';
      events[i].teams[j].flagCopy = flagLink.concat(flagCode);
      events[i].teams[j].point = round(events[i].teams[j].point)
      if (events[i].teams[j].code === 'insider#234')
        events[i].teams[j].name = 'NA';
      events[i].teams[j].code = 'NA';
    }
  }




  function setCode(a) {
    setTCode(a);
    window.scrollTo(0, 0);
  }
  const [tCode, setTCode] = useState('insider');
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])

  if (tCode === 'insider') {
    return (
      <>
        <Hero />
        <Accordion>

          {events.map((rankedEvent, indexEvents) => {
            return <center><div style={{ marginBottom: 10, maxWidth: 1000 }} id={indexEvents} >
              <AccordionItem>
                <AccordionItemHeading className='collapsibleHeadEven'>
                  <AccordionItemButton>
                    {rankedEvent.name}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <center><h2 style={{ letterSpacing: '2px', wordSpacing: '5px' }}>LEADERBOARD</h2></center>
                  <table style={{ border: ' 0px solid rgb(219, 219, 219)', maxWidth: '900px' }}>
                    <thead><tr>
                      <th style={{ border: ' 0px solid rgb(219, 219, 219)', textAlign: 'left' }}></th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                      {rankedEvent.teams.map((team, index) => (
                        <><tr key={index} className='boardRows'>
                          <td colspan="2" style={{ border: ' 0px solid rgb(219, 219, 219)', borderRight: '100px solid red' }}>
                            <div className="team" style={{ width: '100%' }}>
                              <span style={{ float: 'left', fontStyle: 'italic', color: '#dd5656', fontSize: 18 }}>#{index + 1}.</span> <div className="team-logo" style={{ marginLeft: '10px', width: '60px', height: '40px' }}>
                                <img src={team.logo} alt={team.name} />
                              </div>
                              <div className="team-name"
                                style={{ width: '100%', cursor: 'pointer', textAlign: 'left' }}
                                onClick={() => setCode(team.code)}>
                                <span>{team.name}</span>

                                <span><img className="flag"
                                  src={team.flagCopy} style={{ borderRadius: 0 }} width='20px' height='20px' />
                                </span>
                              </div>

                            </div></td>
                          <td style={{ float: 'right', marginTop: 15 }}>
                            <span style={{ float: 'left', fontStyle: 'italic', fontSize: 18 }}>{team.point}</span>
                          </td>

                        </tr>
                        </>

                      ))}

                    </tbody>
                  </table>

                </AccordionItemPanel>
              </AccordionItem>

            </div>  </center>

          })}
        </Accordion>
        <center>Last updated: <span style={{ color: '#dd5656' }}>{date}</span></center>
        <br />
      </>
    );

  }
  else {
    return (
      <>
        <Hero />
        <Team teamCode={tCode} />
        <center style={{ marginTop: '50px' }}>
          <button type='button' className="button button-primary button-wide-mobile button-sm" onClick={() => setCode('insider')}>Back</button></center>
        <br />
      </>
    );
  }

};

export default RankedEvent;
