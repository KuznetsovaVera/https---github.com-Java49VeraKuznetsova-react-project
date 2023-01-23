import React from 'react';
import { Timer } from './components/Timer';

const divStyleRow: React.CSSProperties = {display:"flex", flexDirection: 'row', 
alignItems:"center"}
const divStyleOne: React.CSSProperties = {justifyContent:"center",display:"flex", margin:"5vw"}
function App() {
  return   <div>   
    <div style={divStyleRow}> 
     <div style={divStyleOne}>
    <Timer CityOrCountry= {'Israel'}></Timer>
    </div>
    <Timer CityOrCountry= {'Oslo'} ></Timer>
    </div>
    <div style={divStyleRow}>
       <div style={divStyleOne}>
    <Timer CityOrCountry={'Toronto'} ></Timer> 
    </div>
    <Timer CityOrCountry={'China'} ></Timer>
    </div>
   </div>
}

export default App;
