import React from 'react';
import {  Board } from './BoardData';
import Hero from '../../../components/sections/Hero';


function Boards(){
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
    style={{color:'#11142f', fontSize:'44px',marginLeft:'2%', letterSpacing:'2px'}}>
        INSIDER AF BOARDS
        <br/>
    <span style={{color:'grey',fontSize:'30px'}}>(External)</span>
    <br/>
   
    </h2>
    </center>
    <Board heading='THE NIGHT FALLING' lobby='TNF'/>
    <br/>
    </>
  );
}


export default Boards;