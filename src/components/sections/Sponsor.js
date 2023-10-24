import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Hero from './Hero';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Sponsor = ({
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
    width: '50%',
    borderRadius: '50%',
    marginBottom: '20px'
  }

  // const t1 = {
  //   image: 'https://bestjquery.com/tutorial/our-team/demo64/images/img-1.jpg',
  //   name: 'Seven 7',
  //   role: 'Founder',
  //   link: '/pubgm/Slime4kt'
  // }
  // const t2 = {
  //   image: 'https://bestjquery.com/tutorial/our-team/demo64/images/img-3.jpg',
  //   name: 'Cxld Liam',
  //   role: '???',
  //   link: '/pubgm/sidizens'
  // }
  // const t3 = {
  //   image: 'https://bestjquery.com/tutorial/our-team/demo64/images/img-4.jpg',
  //   name: 'Uzi Chris',
  //   role: 'fill in the space',
  //   link: 'http://www.twitter.com'
  // }

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
      <>
      <Hero />
      <div className='container'>
      <center>
          <b>
   
          We appreciate every form of support and love shown to us. However, for the maintenance and development of new features for AF eSports Insider, we require proper financial backing.
          </b>
          <br/>
          <br/>
          We currently have an active Tier 1 PUBG mobile team, Tier 1 CODM team, and other running and upcoming projects under Insider Africa. If you wish to support or sponsor us, let us know
          <br/>
          <a href='mailto:africanesportsinsider@gmail.com' target='blank'><button className="button button-primary button-wide-mobile button-sm">Sponsor</button></a>
          </center>

</div>
<br/>
<br/>
    </>
  );
}

Sponsor.propTypes = propTypes;
Sponsor.defaultProps = defaultProps;

export default Sponsor;