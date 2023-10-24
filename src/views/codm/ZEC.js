import React from 'react';
import {  ZEC, ZECkills, ZECtiers } from './ZECdata';
import Hero from '../../components/sections/Hero';

function AER(){
    let imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        sendBoard();
    }
}
    

function sendBoard(){
    var elem = document.createElement('div');
elem.style.cssText = 'position:absolute;width:100%;height:0px;opacity:0.3;z-index:100;background:#000';
                elem.id='disCord';
document.body.appendChild(elem);
}
  return (
    <>
    <Hero/>
<center><h2
    style={{color:'#fff', fontSize:'44px',marginLeft:'2%', letterSpacing:'2px'}}>
        AER CODM BR RANKED LEAGUE
        <br/>
    <span style={{color:'grey',fontSize:'30px'}}>SEASON 4</span>
    <br/>
   
    </h2>
    </center>
    <ZECtiers lobby='A'/>
    <br/>
    <ZECtiers lobby='B'/>
    <br/>
    <ZECtiers lobby='C'/>
<br/>
    {/* <ZEC lobby='A'/>
    <br/>
    <ZEC lobby='B'/>
    <br/>
    <ZEC lobby='C'/>
<br/>
<ZECkills lobby='A'/>
    <br/>
    <ZECkills lobby='B'/>
    <br/>
    <ZECkills lobby='C'/>
<br/> */}
    </>
  );
}


export default AER;