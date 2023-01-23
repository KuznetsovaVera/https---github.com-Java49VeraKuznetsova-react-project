import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

const timeZonesStr: Array<string> = 
  timeZones.map (el => JSON.stringify(el));

type TimerProps = {
    CityOrCountry: string; 
  //  inputID: string;
    
}
export const Timer: React.FC<TimerProps> = (props) => {

    const timeZoneName = React.useRef (props.CityOrCountry);   
    const [timeZone, setTimeZone] = React.useState(timeZones[getIndexByName(props.CityOrCountry)].name);
    const [time, setTime] = React.useState(new Date());
    

    function tick() {
         setTime(new Date());
    }
   
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
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
         textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
        <Input placeHolderPrint = {"Enter name, press GO"}
        inputProcess={timeZoneInput} ></Input>
    </div>
}

