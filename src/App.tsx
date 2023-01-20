import React from 'react';
import { Timer } from './components/Timer';

const divStyleRow: React.CSSProperties = {display:"flex", flexDirection: 'row', 
alignItems:"center"}
const divStyleOne: React.CSSProperties = {justifyContent:"center",display:"flex", margin:"5vw"}
function App() {
  return   <div>   
    <div style={divStyleRow}> 
     <div style={divStyleOne}>
    <Timer CityOrCountry= {'Israel'} inputID={'input1'}></Timer>
    </div>
    <Timer CityOrCountry= {'Israel'} inputID={'input2'}></Timer>
    </div>
    <div style={divStyleRow}>
       <div style={divStyleOne}>
    <Timer CityOrCountry={'Israel'} inputID={'input3'}></Timer> 
    </div>
    <Timer CityOrCountry={'Israel'} inputID={'input4'}></Timer>
    </div>
   </div>
}

export default App;
