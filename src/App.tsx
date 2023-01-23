import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';
import { Alert } from './components/Alert';

/*
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
*/

function App() {
   const properties: React.CSSProperties = {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "5vw"
   }

   const [cityOrCountries, setCityOrCountry] =
         React.useState<string[] > ([]);
    
   function creatingDivs (value: string): string {
    const cityOrCountries:  string[] = value.split('#');
    let res: string = ''
    if (cityOrCountries.length % 2 != 0) {
      res = 'must be even numbers of Cities/Countries';
                                        }
    setCityOrCountry(cityOrCountries.slice()); 
    return res;
   }

   
   function getDivs (cityOrCountries: string[]): JSX.Element[] {
      return cityOrCountries.map (curName => <div style={{width: "45vw", height: "40vh",
       }}><Timer CityOrCountry={curName} ></Timer> </div>)

   } 
   return <section style = {{display: "flex", flexDirection:"column", alignItems: 'center', marginTop:'5vh'}}>
   <Input placeHolderPrint={'enter City/Country separated by #'} inputProcess={creatingDivs} ></Input>
    <section style={properties}>
       {getDivs(cityOrCountries)}
   </section>
 </section>

}

export default App;

