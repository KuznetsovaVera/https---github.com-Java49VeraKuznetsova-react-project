import React from "react";
import {Box, TextField, Button, Alert, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import generationConfig from '../../config/generation-config.json';
import { employeesActions } from "../../redux/employees-slice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { Employee } from "../../model/Employee";
import { CodeType } from "../../model/CodeType";
import { codeActions } from "../../redux/codeSlice";
type Props ={
    code: CodeType
}
export const Generation: React.FC<Props> = ({code}) => {
    const dispatch = useDispatch();
    const {defaultAmount, minAmount, maxAmount, alertTimeout} = generationConfig;
    const [amount, setAmount] = React.useState<number>(defaultAmount);
    const [flAlertSuccess, setAlertAccess] = React.useState<boolean>(false);
    function handlerAmount(event: any): void {
        setAmount(+event.target.value);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        const employeesAr: Employee[] = [];
        for(let i = 0; i < amount; i++) {
            employeesAr.push(createRandomEmployee())
        }
       
       dispatch(employeesActions.addBulkEmployees(employeesAr))
       setAlertAccess(true);
        setTimeout(() => setAlertAccess(false),alertTimeout );
    
}
    


    return <Box>
      
        <form onSubmit={onSubmitFn} >
        
            <TextField label="amount of employee generated" fullWidth required 
            type="number" onChange={handlerAmount}
             value={amount}
              helperText={`enter amount of employee objects in range [${minAmount}-${maxAmount}]`}
              inputProps = {{
                min: `${minAmount}`,
                max: `${maxAmount}`
              }} />
             
              <Grid item xs = {6} sm={6}>
              <Button type="submit">Generate</Button>
              </Grid>
        </form>
         
        <Grid item>
              {code !== 'OK' && <Alert severity='error' 
              onClose={()=>{dispatch(codeActions.setCode("OK"))}}>{code}, enter another credentials</Alert>}
              </Grid>
        {flAlertSuccess && <Alert severity="success">Generated {amount} random employee objects</Alert>}
        
    </Box>
}