import { Alert, Box, Button, TextField } from "@mui/material"
import { createRandomEmployee } from "../../service/EmployeesService";
//import { AddEmployee } from "./AddEmployee";
//import {addEmployee} from "../../service/Company"
import { employeesActions } from "../../redux/employees-slice";
import { useDispatch } from "react-redux";
import { Employee } from "../../model/Employee";

import React from "react";
const MIN_RANDOM: number = 1;
const MAX_RANDOM: number = 50;

export const Generation: React.FC = () => {
    const dispatch = useDispatch();
    const [randCount, setRandCount] = React.useState<number>(0);
    const [flAlert, setFlAlert] = React.useState<boolean> (false);
    
  // const emplRandom: Employee[] = [];  

function handlerGeneration (event: any) {
setRandCount(event.target.value)

}

function addRandomEmployees (): void {

for (let i:number = 0; i<randCount; i++) {
  dispatch(employeesActions.addEmployee(createRandomEmployee()));
}

setFlAlert(true);
setTimeout(() => setFlAlert(false), 4000);
//const timerID = setInterval(()=> setTimeout(() => { clearInterval(timerID); }, 9000));

//setTimeout(()=>{clearTimeout('emplRandom.forEach (el => dispatch(employeesActions.addEmployee(el)))');}, 5000)
}


    return <Box>

<TextField label="random" fullWidth required 
            type="number" onChange={handlerGeneration}
              helperText={`enter number of random employees [0 - 50]`}
              inputProps = {{
                min: MIN_RANDOM,
                max: MAX_RANDOM
              }}/>  
     <Button type="submit" onClick={addRandomEmployees}>Send</Button>
  {flAlert && 
     <Box >  
     <Alert severity="info">Number of random employees: {randCount}</Alert>
     </Box>
    }
    </Box>
}

//onClick={<Alert severity="info">`Number of random employees: ${value}'</Alert>}>