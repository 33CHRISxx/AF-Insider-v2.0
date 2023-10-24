import React, { useEffect } from 'react';
// import sections
import Hero from '../sections/Hero';
import FeaturesTiles from '../sections/FeaturesTiles';


function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
    }
  }, [])
  return (
    <>
    <Hero className="illustration-section-01" />
  
    <div className='container'>
      <h2 style={{textAlign: 'center'}}><b>DISCLAIMER</b></h2>
<p><b>WEBSITE DISCLAIMER</b></p>
<p>The information provided by Team Insider on <b>insideraf.com</b> is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
<p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
<p><b>EXTERNAL LINKS DISCLAIMER</b></p>
<p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
<p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>



<p><b>ERRORS AND OMISSIONS DISCLAIMER</b></p>
<p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, African Esports Insider is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.</p> <p>In no event will African Esports Insider, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>

<p><b>LOGOS AND TRADEMARKS DISCLAIMER</b></p>
<p>All logos and trademarks of third parties referenced on insideraf.com are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of African Esports Insider by such owners.</p>
<p><b>CONTACT US</b></p>
<p>Should you have any feedback, comments, requests for technical support or other inquiries, please <a style={{color:'#dd5656'}} href='/Contact'>Contact us</a></p>


    </div>

     <FeaturesTiles  topDivider/>

   
    </>
  );
}

export default Disclaimer;