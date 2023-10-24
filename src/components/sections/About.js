import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Hero from './Hero';
import FeaturesTiles from './FeaturesTiles';


const propTypes = {
  ...SectionTilesProps.types
}



const defaultProps = {
  ...SectionTilesProps.defaults
}

const About = ({
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

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );
  

  const image = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '20px'
  }
 const featuredName = {
    color: "#fff",
    marginBottom: '10px'
 }

 const teamMembers = [
 {
    image: 'Victor.jpg',
    name: 'Victor',
    role: 'Founder',
    link: 'https://www.instagram.com/seventhegod4ll/'
  },
{
    image: 'liam.JPG',
    name: 'William',
    role: 'Product Manager',
    link: 'https://www.33yliam.com/'
  },
{
    image: 'chris.jpeg',
    name: 'Chris',
    role: 'Financial Manager',
    link: 'https://www.instagram.com/chris.on.pills'
  },
{
    image: 'Sandman.JPG',
    name: 'Sandman',
    role: 'Graphics Designer',
    link: 'https://www.instagram.com/eexsandman/'
  },
  {
    image: 'crownzxx.jpg',
    name: 'Crownzxx',
    role: 'Narrator & Interviewer',
    link: 'https://www.youtube.com/c/CROWNZxxPUBGm'
  },
  {
    image: 'savage.jpeg',
    name: 'SavageGamingHD',
    role: 'Content Creator',
    link: 'https://www.youtube.com/c/SAVAGEPUBG'
  },
  {
    image: 'stier.png',
    name: 'Stier',
    role: 'Graphics Designer',
    link: 'https://www.instagram.com/stier_gfx/'
  },
]
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    
      <>
      
      <Hero />
      <div className="container"><center><p style={{color:'#9a1a1a', fontSize:'25px'}}><b>ABOUT US</b>
      </p>
      Founded in August 2020, African eSports Insider has been covering PUBGM player transfer and team rebranding in Nigeria.<br/>
With our recent expansion into other African countries, African eSports Insider aims to be the major source of not just PUBGM eSports updates, but to also cover all other eSports titles for Africa as a whole.
<br/><br/>
Currently, we cover everything going on in the African PUBGM and CODM competitive scene.
<br/><br/>
Since our first appearance on twitter, we've been able to:
<li>Grow 600+ Twitter followers</li>
<li>Grow 500+ Instagram followers</li>
<li>Grow 100+ YouTube subscribers</li>
<li>Launch our own websites : <a style={{color:'#9a1a1a'}} href='https://www.insideraf.com'>https://www.insideraf.com</a></li>
<li>Obtain and provide 200+ PUBGM teams details</li>
<li>800+ competitive players</li>
<li>Partner with <a style={{color:'#9a1a1a'}} href='https://discord.gg/jVdbTvuEQe'>Scrypted Esports</a></li>

<br/><br/>
{/* <b>Founded in August 2020, African eSports Insider has been able to: </b>

<li>Grow 500+ twitter followers</li>
<li>Obtain and provide 32+ PUBGM teams data</li>
<li>150+ competitive players</li>
<li>Partner with the #1 PUBGM event organizers in Nigeria (SCRYPTED ESPORTS)</li>
<li>Partner with the a top Nigerian PUBGM caster (Crownzxx)</li> */}
      </center>
      </div>



    <section
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <center><p style={{color:'#9a1a1a', fontSize:'25px'}}><b>TEAM INSIDER</b></p></center>
          <div className={tilesClasses}>
            {teamMembers.map((data, index)=>{
              return <a href={data.link} target='blank'>
                <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner"  style={{background:'#1a1a1a'}}>
                <div className="testimonial-item-content">
                  <center><img src={data.image} alt='' style={image}/></center>
                  <center style={featuredName}>
                  <b>{data.name}</b>
                     </center>
                     
                     <center>{data.role}</center>
                     
                </div>
              </div>
            </div>
            </a>
            })}

          </div>
        </div>
      </div>
    </section>

    </>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;