import { BlockList } from "net";
import React from "react";
import timeZones from "../time-zones";

export const cityOrCountryMain: string = 'Israel';

export const cityOrCountryAll: Array<string> =
  ['London','NaN', 'Toronto', 'Oslo'];
/*
type TimerProps = {
    timeZoneIndex: number;
}
*/
type TimerProps = {
    timeZoneCityOrCountry: string; 
    
}
export const Timer: React.FC<TimerProps> = (props) => {
    let index: number = getIndexByName(props.timeZoneCityOrCountry);
  // const timeZone = timeZones[props.timeZoneCityOrCountry[getIndexByName(city)]].name;
  const timeZone = timeZones[index].name;
    const [time, setTime] = React.useState(new Date());
    function tick() {
      //  console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    function getIndexByName (cityOrCountry: string): number {
        const timeZonesStr: Array<string> = 
            timeZones.map (el => JSON.stringify(el));
        let index: number = timeZonesStr.findIndex (el => 
            el.includes(cityOrCountry) );
           // console.log (index);
            if (index === -1) index = timeZonesStr.findIndex (el=> el.includes(cityOrCountryMain));
        return index;    
    }
    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{display: "flex", 
         textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}