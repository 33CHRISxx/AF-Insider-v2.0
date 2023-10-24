import React, { useEffect } from 'react';
// import sections
import Hero from '../sections/Hero';
import FeaturesTiles from '../sections/FeaturesTiles';
import { Follow } from 'react-twitter-widgets'


function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  
  return (
    <>
    <Hero/>
  
    <div className='container'>
      <center><p style={{color:'#dd5656', fontSize:'25px'}}><b>CONTACT US</b></p>
      <b>
        To submit or update your team details, kindly open Insider ticket on <button className="button button-primary button-wide-mobile button-sm" onClick={()=>window.open
        ('https://discord.gg/jVdbTvuEQe','_blank')}>SCRYPTED ESPORTS</button> discord sever
        </b></center>
      <center style={{marginTop:'50px'}}>For other reasons, kindly use any of the below
      <br/><br/><Follow username="insideraf" options={{ size: "large" }} />
      <br/><a href='mailto:africanesportsinsider@gmail.com' style={{color:'#e25858'}} target='blank'>africanesportsinsider@gmail.com</a><br/><br/></center>
    </div>

    </>
  );
}

export default Contact;