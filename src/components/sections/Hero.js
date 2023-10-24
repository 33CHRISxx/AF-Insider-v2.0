import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import ScrollText from 'react-scroll-text'
import { random } from 'lodash';



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
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

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
const banners = [
  {
  img:'/banners/cocChamps.jpg',
link: 'https://www.instagram.com/p/CT4v4ZgId8X/'
},
{
  img:'/banners/pmcoFall21.jpg',
link: 'https://www.instagram.com/p/CTwNINeAg8u/'
},
{
  img:'/banners/welcomeRila.jpg',
link: 'https://www.instagram.com/p/CSkYHQujKzF/'
},
{
  img:'/banners/storm.jpg',
link: 'https://www.youtube.com/watch?v=yoCcvC7Xl0w'
},
];
let partnerWidth = isMobile?50:100;
const[ranNum, setRanNum] = useState(0);
useEffect(()=>{
 setRanNum(random(3));
},[])
  // useEffect(()=>{
  //   getYTvideo();
  // },[])
  return (
    <section
      {...props}
      className={outerClasses}
      style={{marginBottom: 10}}
    >
        <center><div style={{color:'#C5C5C5',background:'#181818'}}>
        <ScrollText speed={80}>
        <span style={{marginLeft:'80px', cursor:'pointer'}} onClick={()=> window.open('https://www.instagram.com/insider.af/', "_blank")}>Follow us on Instagram <span style={{color:'yellow'}}>@insider.af</span></span>
        <span style={{marginLeft:'80px', cursor:'pointer'}} onClick={()=> window.open('https://twitter.com/InsiderAf', "_blank")}>Follow us on Twitter <span style={{color:'#1da1ff'}}>@InsiderAf</span></span>
        <span style={{marginLeft:'80px', cursor:'pointer'}} onClick={()=> window.open('https://www.youtube.com/channel/UCH7WOkZDjDaQPVviPSpWFRw', "_blank")}>Subscribe to our <span style={{color:'red'}}>YouTube</span> channel</span>
        <span style={{marginLeft:'80px', cursor:'pointer'}} onClick={()=> window.open('https://www.instagram.com/rila_insider/', "_blank")}>Follow rila on Instagram <span style={{color:'yellow'}}>@rila_insider</span></span>
      </ScrollText>
        

</div></center>
      <center><div style={{width:'100%'}}>
      <img src={banners[ranNum].img}
      onClick={()=> window.open(banners[ranNum].link, "_blank")}
      style={{maxHeight:800, width:'100%', maxWidth:1500 }}
      />
      </div></center>
 <div style={{width:'100%',marginTop:10}}>

<table style={{border:0}}>
 <tr>
    <td>
    <img src='\scrypted_icon.png' style={{maxWidth:partnerWidth}} onClick={()=> window.open('https://discord.gg/jVdbTvuEQe', "_blank")}/>
      </td>
  </tr>
  </table>
<hr style={{background:'#1C1C1C'}} />



</div>

    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;