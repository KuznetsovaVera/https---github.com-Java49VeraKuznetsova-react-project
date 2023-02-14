import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { EmployeeProps } from "../../models/employeeProps"
import {MinMaxMiddleProps,  statSalary} from "../../models/EmployeesService"

export const SalarySatistics: React.FC = () => {
    const employees: EmployeeProps[] = useSelector <any, EmployeeProps[]>(state => state.empl.employees)
    const SalaryObg: MinMaxMiddleProps = statSalary(employees)
   if (SalaryObg.min === Infinity) {
    SalaryObg.min=0; SalaryObg.max=0; SalaryObg.middle=0;
   }
    return <Box> 
    <Typography sx={{fontSize: '1.5em'}}> Minimum salary: {SalaryObg.min} </Typography> 
   <Typography sx={{fontSize: '1.5em'}}> Maximum salary: {SalaryObg.max}  </Typography>
   <Typography sx={{fontSize: '1.5em'}}> Middle salary: {SalaryObg.middle.toFixed(2)} </Typography> 
  
    </Box>
}

