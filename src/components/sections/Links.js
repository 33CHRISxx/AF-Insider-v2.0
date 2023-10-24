import React, { useEffect } from 'react';
// import sections
import './partner.css'
import VanillaTilt from 'vanilla-tilt';


<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
function Links() {
    document.body.className='links';
    VanillaTilt.init(document.querySelectorAll(".social__links ul li"), {
		max: 10,
		speed: 800,
        glare: true,
        "max-glare": 1
	});
  return (
    <>

<div className="container">
  <div className="head__section">
    <img
    src="https://firebasestorage.googleapis.com/v0/b/af-esports-insider.appspot.com/o/whiteInsider.png?alt=media&token=0d95d116-8742-4b88-8b4e-65a5675add67"
    alt="insideraf.com" />
    <p>African eSports Insider</p>
    <br/>
      </div>
  <div className="social__links">
    <ul id="item">
      <li className="website"><a target='_blank' href="https://insideraf.com">
          <i className="fa fa-globe" style={{color:'green'}}></i>
          <span>
            <h3>www.insideraf.com</h3>
          </span>
        </a></li>
             <li className="instagram"><a target='_blank' href="https://www.instagram.com/insider.af/">
          <i className="fa fa-instagram" style={{color:'#fd5949'}}></i>
          <span>
            <h3>@insider.af</h3>
          </span>
        </a></li>

        <li className="boardsider"><a target='_blank' href="https://www.boardsider.com">
          <i className="fa fa-briefcase" style={{color:'#56157a'}}></i>
          <span>
            <h3>BoardSider</h3>
          </span>
        </a></li>
        <li className="boardsider"><a target='_blank' href="https://discord.com/api/oauth2/authorize?client_id=907194431424299020&permissions=101440&scope=bot">
          <i className="fas fa-robot" style={{color:'#7272ff'}}></i>
          <span>
            <h3>BoardSider Bot</h3>
          </span>
        </a></li>
        <li className="instagram"><a target='_blank' href="https://www.instagram.com/boardsider/">
          <i className="fa fa-instagram" style={{color:'#fd5949'}}></i>
          <span>
            <h3>@boardsider</h3>
          </span>
        </a></li>
      <li className="youtube"><a target='_blank' href="https://www.youtube.com/channel/UCH7WOkZDjDaQPVviPSpWFRw">
          <i className="fa fa-youtube" style={{color:'red'}}></i>
          <span>
            <h3>AF Esports Insider</h3>
          </span>
        </a></li>
        <li className="discord"><a target='_blank' href="https://discord.gg/DAJur9epAw">
          <i className="fab fa-discord" style={{color:'#7272ff'}}></i>
          <span>
            <h3>AF Esports Insider</h3>
          </span>
        </a></li>
      <li className="twitter"><a target='_blank' href="https://twitter.com/InsiderAf">
          <i className="fa fa-twitter" style={{color:'#0088cc'}}></i>
          <span>
            <h3>@InsiderAf</h3>
          </span>
        </a></li>
      <li className="instagram"><a target='_blank' href="https://www.instagram.com/rila_insider/">
      <img
    src="https://media.discordapp.net/attachments/874064546300592158/879302363620454420/image0.png?width=676&height=676"
    alt="Rila Insider"  />
          <span>
            <h3>@rila_insider</h3>
          </span>
        </a></li>
    </ul>
  </div>
</div>

    </>
  );
}

export default Links;