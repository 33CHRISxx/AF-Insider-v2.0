import React, {useState,useEffect}from 'react';
import Hero from '../../../components/sections/Hero';
import Teams from './Teams';

function Index(){
    let coco = 'AE#234';
    coco = encodeURIComponent(coco)
    fetch("http://localhost:5001/af-esports-insider/us-central1/api/pubgm/"+coco)
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
  })
    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
        }
      }, [])
        const[tCountry, setCountry] = useState('');        
    
        if(tCountry === '')
        return(
            <>
            <Hero />
         
         <div className='container'>
        <center>
        <b>Search Team</b><br/>
        <input style={{width:'80%', marginRight:'10%',  marginLeft:'10%'}} type='text' id='teamCountry' placeholder='Enter Country'/>
        <button type='button' style={{marginTop:'20px', marginBottom:'20px'}} className="button button-primary button-wide-mobile button-sm" onClick={() => setCountry(document.getElementById('teamCountry').value)}>Search</button></center>
        </div>
        </>
    );
    else
    return(
        <>
        <Hero />
        <Teams tCountry = {tCountry}/>
        </>
    );

}
export default Index;