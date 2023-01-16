import React from 'react';
import { cityOrCountryAll, Timer } from './components/Timer';


function App() {
  return   <div>   
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[0]}></Timer>
    <Timer timeZoneCityOrCountry= {cityOrCountryAll[1]}></Timer>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[2]}></Timer>
    <Timer timeZoneCityOrCountry={cityOrCountryAll[3]}></Timer>
   </div>
}

export default App;
