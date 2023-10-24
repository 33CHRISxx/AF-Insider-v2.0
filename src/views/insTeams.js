import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import ScrollText from 'react-scroll-text'
import './insTeams.css'
import Hero from '../components/sections/Hero';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const rilaEvents = [
  {
    name: 'TSN Triple Threat Season 1',
    rank: 1,
    earned: 'R2,000',
    date: '30 December, 2021'
  },
  {
    name: 'Umzansi Esports League Season 4 Finals',
    rank: 3,
    earned: '$920',
    date: '05 December, 2021'
  },
  {
    name: 'Umzansi Esports League Season 4 Group Stage',
    rank: 1,
    earned: 'Qualification to Semi Finals',
    date: '10 October, 2021'
  },
  {
    name: 'Invitational Africa Event',
    rank: 6,
    earned: '$0',
    date: '21 September, 2021'
  },
  {
    name: 'Clatter Of Clans (COC) Season 8',
    rank: 1,
    earned: '$100',
    date: '16 September, 2021'
  },
  {
    name: 'PMCO Africa Fall Split',
    rank: 13,
    earned: '$900',
    date: '12 September, 2021'
  },
  {
    name: 'Mettlestate Pro Series Season 9',
    rank: 5,
    earned: '$0',
    date: '23 August, 2021'
  },
  {
    name: 'Umzansi Esports League Season 4 Promotion/Relagation',
    rank: 3,
    earned: 'Promotion to Umzansi League S4',
    date: '22 August, 2021'
  },

]

const Rila = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  return (
    <>
      <Hero />
      <center>PUBGM<br /><span style={{ color: '#ddd', fontWeight: 'bolder', fontSize: 26 }}>Rila Insider</span>
        <img src='https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg' style={{ width: 40, height: 30 }} />
      </center>
      <br />

      <div className="rila">
        <div className="player-block" onClick={() => window.open('https://www.instagram.com/zeek.gaming/', "_blank")}>
          <img src='./Zeek.png' />
          <div className='name'>insZeek</div>
          <div className='role'>IGL</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div>
        {/* <div className="player-block" onClick={() => window.open('https://www.instagram.com/jroller_fps/', "_blank")}>
          <img src='./Jroller.png' />
          <div className='name'>insJroller</div>
          <div className='role'>Fragger</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div> */}
        <div className="player-block" onClick={() => window.open('https://www.instagram.com/cocopopsfps/', "_blank")}>
          <img src='./Coco.png' />
          <div className='name'>insCoco</div>
          <div className='role'>Free Man</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div>
        <div className="player-block" onClick={() => window.open('https://www.instagram.com/trip_pubgm/', "_blank")}>
          <img src='./Trip.png' />
          <div className='name'>insTrip</div>
          <div className='role'>Scout</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div>
        <div className="player-block" onClick={() => window.open('https://www.instagram.com/slay_ios/', "_blank")} style={isMobile ? { marginBottom: '400px' } : { marginBottom: '100px' }}>
          <img src='https://cdn.discordapp.com/attachments/890892061451100171/960603831887077487/IMG_2186.jpg' />
          <div className='name'>insSLAY</div>
          <div className='role'>TBA</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div>
        <div className="player-block" onClick={() => window.open('https://www.instagram.com/matrix_ios/', "_blank")} style={isMobile ? { marginBottom: '400px' } : { marginBottom: '100px' }}>
          <img src='./logoW.png' />
          <div className='name'>insMATRIX</div>
          <div className='role'>TBA</div>
          <div className='logo'><img src='./logoW.png' /></div>
          <div className='social'>
            <img src='./insta.png' />
          </div>
        </div>
      </div>


      <center><h2 className='h2Style'>RECENT EVENTS</h2></center>
      <table style={{ border: ' 0px solid rgb(219, 219, 219)', maxWidth: '900px' }}>
        <thead><tr>
          <th style={{ border: ' 0px solid rgb(219, 219, 219)', textAlign: 'left' }}></th>
          <th></th>

        </tr>
        </thead>
        <tbody>
          {rilaEvents.map((event, index) => (
            <>
              <tr className='scrimsRow' style={{ backgroundImage: 'linear-gradient(to bottom right, rgb(160, 49, 49) , rgb(0, 0, 0))' }}>
                <td colspan="2" style={{ border: ' 0px solid rgb(219, 219, 219)', borderRight: '100px solid red' }}>
                  <div className="team" style={{ width: '100%' }}>

                    <div className="team-name"
                      style={{ width: '100%', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ color: 'white', fontWeight: 'bolder' }}>{event.name}</span>
                      <br />
                      <span style={{ fontSize: 14 }}>
                        Earned {event.earned}</span>
                      <br />
                      <span style={{ fontSize: 14 }}>
                        {event.date}</span>
                    </div>

                  </div></td>
                <td style={{ float: 'right', color: 'black', marginTop: 15 }}>
                  <span style={{ float: 'left', fontStyle: 'italic', color: 'white', fontSize: 18 }}>Rank {event.rank}</span>
                </td>
              </tr>
              <br />
            </>

          ))}
        </tbody>
      </table>


    </>
  );
}

Rila.propTypes = propTypes;
Rila.defaultProps = defaultProps;

export default Rila;