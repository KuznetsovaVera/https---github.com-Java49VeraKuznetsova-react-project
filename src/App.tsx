import React from 'react';
import { cityOrCountryAll, Timer } from './components/Timer';


function App() {
  return   <div>   
    <div style={{display:"flex", flexDirection: 'row',
    padding:"5vw", textAlign:"center"}}> 
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[0]}></Timer>
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[1]}></Timer>
    </div>
    <div style={{display:"flex", flexDirection: 'row',
    padding:"5vw", textAlign:"center"}}>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[2]}></Timer>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[3]}></Timer>
    </div>
   </div>
}


export default App;
