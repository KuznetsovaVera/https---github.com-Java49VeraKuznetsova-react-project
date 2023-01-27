import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

const timeZonesStr: Array<string> = 
  timeZones.map (el => JSON.stringify(el));

type TimerProps = {
    CityOrCountry: string; 
    time: Date;   
}
export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number = getIndexByName(props.CityOrCountry);
    const timeZoneIndexIsrael: number = getIndexByName("Israel")
    const timeZoneName = React.useRef (timeZoneIndex === -1 ? "Israel" :
                                        props.CityOrCountry); 
 
    const [timeZone, setTimeZone] = React.useState(timeZoneIndex === -1 ?
             timeZones[timeZoneIndexIsrael].name : timeZones[timeZoneIndex].name);  
             const [time, setTime] = React.useState(new Date());
/*
    React.useEffect(() => {
        const timeZoneIndex: number = getIndexByName(props.CityOrCountry);
        timeZoneName.current = timeZoneIndex === -1 ? "Israel" :
        props.CityOrCountry; 
        timeZoneIndex === -1 ?
            setTimeZone(timeZones[timeZoneIndexIsrael].name) : 
            setTimeZone(timeZones[timeZoneIndex].name);
        const interval = setInterval(tick, 1000);
       // setTimeZone(timeZones[timeZoneIndex].name); 
           return ()=>clearInterval(interval);
    }, [props]);

    function tick() {
        setTime(new Date());
   }
   */
   React.useEffect(() => {
    const timeZoneIndex: number = getIndexByName(props.CityOrCountry);
    timeZoneName.current = timeZoneIndex === -1 ? "Israel" :
    props.CityOrCountry; 
    timeZoneIndex === -1 ?
        setTimeZone(timeZones[timeZoneIndexIsrael].name) : 
        setTimeZone(timeZones[timeZoneIndex].name);
  //  const interval = setInterval(tick, 1000);
   // setTimeZone(timeZones[timeZoneIndex].name); 
     //  return ()=>clearInterval(interval);
}, [props]);

    function timeZoneInput (cityOrCountry: string): string {
     let res: string ='';
     let index: number = getIndexByName (cityOrCountry);
     if (index === -1) {
        res = cityOrCountry + ": error on City or Country, try again";
     } else {
        timeZoneName.current = cityOrCountry;
        setTimeZone(timeZones[index].name); 
        
     }
      
     return res;
    }

    function getIndexByName (cityOrCountry: string): number {
       let index: number = timeZonesStr.findIndex (el => 
            el.includes("\""+cityOrCountry+"\"") );

      return index;   
     
    }
    return <div>
       
        <h3 className="logo">Time in time zone {timeZoneName.current}</h3>
        <label style={{display: "flex", 
        textAlign: "center", fontSize: "2em"}}>
            Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
        <Input placeHolderPrint = {"Enter name, press GO"}
        inputProcess={timeZoneInput}></Input>
    </div>
}

