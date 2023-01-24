import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';


function App() {
   const properties: React.CSSProperties = {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "5vw"
   }

   const [cityOrCountries, setCityOrCountry] =
         React.useState<string[] > ([]);
   const [time, setTime] = React.useState(new Date());
    
   function tick() {
            setTime(new Date());
       }
      
   React.useEffect(()=>{
           const interval = setInterval(tick, 1000);
           return ()=>clearInterval(interval);
       }, [])

   function creatingDivs (value: string): string {
    const cityOrCountries:  string[] = value.split('#');
    let res: string = ''
    if (cityOrCountries.length % 2 !== 0) {
      res = 'must be even numbers of Cities/Countries';
      setCityOrCountry([]);
                                        }
     else {
      setCityOrCountry(cityOrCountries.slice()); 
     }                                      
    
    return res;
   }

   
   function getDivs (cityOrCountries: string[]): JSX.Element[] {
      return cityOrCountries.map (curName => <div style={{width: "45%", height: "40vh",
       }}><Timer CityOrCountry={curName} time={time} ></Timer> </div>)

   } 
   return <section style = {{display: "flex", flexDirection:"column", alignItems: 'center', marginTop:'5vh'}}>
   <Input placeHolderPrint={'enter City/Country separated by #'} inputProcess={creatingDivs} widthInput="50vw"></Input>
    <section style={properties}>
       {getDivs(cityOrCountries)}
   </section>
 </section>

}

export default App;

