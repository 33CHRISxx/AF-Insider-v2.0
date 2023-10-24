import React from "react";
import {Link} from 'react-router-dom'

import "./styles.css";

function Coming() {


  return (
    <>
    <div className="bg">
  <div class="middle">
    <h1>COMING SOON</h1>
    <hr/>
    <p style={{marginBottom: '100px'}}>We appreciate every form of support and love shown to us. However, for the maintenance and development of new features for AF Esports Insider, we require proper financial backing.
Wish to support AF Esports Insider ? <Link to='/Contact' style={{color:'#e25858'}}>Contact us</Link></p>
  </div>
  </div>
    
    </>
);

}

export default Coming;
