//import { BlockList } from "net";
import React from "react";
import timeZones from "../time-zones";

export const cityOrCountryMain: string = 'Israel';

export const cityOrCountryAll: Array<string> =
  ['London','Vasya', 'Toronto', 'Oslo'];
/* V.R. It isn't good idea to join tester's tools 
to tested code.
*/
const timeZonesStr: Array<string> = 
  timeZones.map (el => JSON.stringify(el));
const indexMain: number =  timeZonesStr.findIndex (el=> el.includes(cityOrCountryMain))

/*
type TimerProps = {
    timeZoneIndex: number;
}
*/
type TimerProps = {
    timeZoneCityOrCountry: string; 
    
}
export const Timer: React.FC<TimerProps> = (props) => {
    let timeZoneIndex: number = getIndexByName(props.timeZoneCityOrCountry);
    const timeZone: string = timeZones[timeZoneIndex].name;
    const [time, setTime] = React.useState(new Date());
    function tick() {
         setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    /* V.R. This method doesn't see difference between 'Oslo' and 'Osl',
     between 'Toronto' and 'ronto'. It looks like bug
    */
    function getIndexByName (cityOrCountry: string): number {
       let index: number = timeZonesStr.findIndex (el => 
            el.includes(cityOrCountry) );
        return index === -1 ? indexMain : index;    
    }
    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{display: "flex", 
         textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}

