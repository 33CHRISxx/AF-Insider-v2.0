import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import './partner.css'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const f1 = [
    {
      image: 'https://yt3.ggpht.com/ytc/AAUvwniv2l4c-_VmH9-dz4AFlAHI4ALkHJwlF0cSMgB7LA=s88-c-k-c0x00ffffff-no-rj',
      name: 'SavageGamingHD',
      link: 'https://www.youtube.com/c/SAVAGEPUBG/',
      desc: 'YouTube content creator with over 70k subscribers'
    },
    {
    image: 'https://pbs.twimg.com/profile_images/1338540408142503940/0EbXrzuL_400x400.jpg',
    name: 'Scrypted E-Sports',
    link: 'https://discord.gg/jVdbTvuEQe',
    desc: 'Battle against African T1 and T2 teams (Scrims and Events)'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
    name: <>Want to sponsor or partner with us? <br/>
    <Link to="/Sponsor" className="button button-primary button-wide-mobile button-sm" >Contact us</Link></>,
    link: '/Sponsor'
  },
];
  return (
    <>
    <center><h2>Partners  and Sponsors</h2><br/><p>Get to know our amazing partners and sponsors</p></center>
    <div className="pad-container">
        {f1.map((team, index) => (

<center key={index}><a href={team.link} target='blank' ><div className="pad light" >
            <center style={{marginTop:'50px'}}>
            <img style={{width:'150px', height:'150px'}} src={team.image} alt={team.name} />
       <b>{team.name}</b> <br/>
       {team.desc}
       </center>
        </div></a></center>

            ))}
            </div>
    </>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;