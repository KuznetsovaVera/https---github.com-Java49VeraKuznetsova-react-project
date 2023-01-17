import React from 'react';
import { cityOrCountryAll, Timer } from './components/Timer';


function App() {
  return   <div>   
    <div style={{display:"flex", flexDirection: 'row', 
     alignItems:"center"}}> 
     <div style={{justifyContent:"center",display:"flex", margin:"5vw"}}>
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[0]}></Timer>
    </div>
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[1]}></Timer>
    </div>
    <div style={{display:"flex", flexDirection: 'row', 
    alignItems:"center"}}>
       <div style={{justifyContent:"center",display:"flex", margin:"5vw"}}>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[2]}></Timer> 
    </div>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[3]}></Timer>
    </div>
   </div>
}

export default App;
