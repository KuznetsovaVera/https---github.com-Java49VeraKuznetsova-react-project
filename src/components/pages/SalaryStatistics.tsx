import { Box, Typography } from "@mui/material"
import { EmployeeProps } from "../../models/employeeProps"
import {MinMaxMiddleProps, minMaxMiddleSalary} from "../../models/EmployeesService"


type Props = {
    employess: EmployeeProps[]
}

export const SalarySatistics: React.FC<Props> = (props) => {
    const SalaryObg: MinMaxMiddleProps = minMaxMiddleSalary(props.employess)
    console.log ("SalSt", props, SalaryObg) 
    return <Box> 
    <Typography sx={{fontSize: '1.5em'} }> Minimum salary: {SalaryObg.min} </Typography> 
   <Typography sx={{fontSize: '1.5em'}}> Maximum salary: {SalaryObg.max}  </Typography>
   <Typography sx={{fontSize: '1.5em'}}> Middle salary: {SalaryObg.middle.toFixed(2)} </Typography> 
  
    </Box>
}

