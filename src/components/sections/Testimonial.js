import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
      image: 'https://lh3.googleusercontent.com/n6UVNoM69UsRQRbMNyyibpfuPntP5QLpa5VfQT7Y6RGTY7FzpGjHynJL-DMjW2dhb7nOLw-tgfWJLUNrVduvDi-wqTz4vBEoxyXUFzE=s0',
      name: 'Inkosi Super Cup S3',
      link: 'https://www.sostronk.com/tournaments/v2'
    },
    {
    image: 'https://pbs.twimg.com/media/Eg644liXsAARbfR?format=jpg&name=large',
    name: 'Fragout Season 2',
    link: 'https://discord.gg/jVdbTvuEQe'
  },
  {
    image: 'https://pbs.twimg.com/profile_images/1278392386905915397/bNvvPW4M_400x400.jpg',
    name: 'Umzansi League Season 3',
    link: 'https://twitter.com/NODWINGamingAF'
  },
  {
    image: 'https://pbs.twimg.com/profile_images/1331611673778679814/QzGBwdAY_400x400.jpg',
    name: 'VPMC Season 2',
    link: 'https://twitter.com/vertigo_esp'
  },

  
]
  
  return (
    <>
    <center><h2>ANTICIPATION</h2></center>
    <div className="card-container" style={{marginBottom:'100px'}}>
        {f1.map((team, index) => (

<a href={team.link} target='blank'><div className="card light" key={index}>
            <center style={{marginTop:'50px'}}>
            <img style={{width:'150px', height:'150px'}} src={team.image} alt={team.name} />
       {team.name}
       </center>
        </div></a>

            ))}
            </div>
    </>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;