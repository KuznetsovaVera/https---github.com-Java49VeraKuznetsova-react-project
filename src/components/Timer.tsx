import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

const timeZonesStr: Array<string> = 
  timeZones.map (el => JSON.stringify(el));

type TimerProps = {
    CityOrCountry: string; 
    inputID: string;
    
}
export const Timer: React.FC<TimerProps> = (props) => {
    const [timeZoneIndex, setTimeZoneIndex] = React.useState(getIndexByName(props.CityOrCountry));
    let timeZone: string = timeZones[timeZoneIndex].name;
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
       timeZone = timeZones[index].name;
       setTimeZoneIndex (index);
     }
      
     return res;
    }

    function getIndexByName (cityOrCountry: string): number {
       let index: number = timeZonesStr.findIndex (el => 
            el.includes("\""+cityOrCountry+"\"") );
        return index;    
    }
    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{display: "flex", 
         textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
        <Input inputId={props.inputID}  placeHolderPrint = {"Enter name, press GO"}
        inputProcess={timeZoneInput} ></Input>
    </div>
}

