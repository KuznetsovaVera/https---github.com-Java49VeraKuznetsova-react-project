import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { EmployeeProps } from "../../models/employeeProps"
import {MinMaxMiddleProps, statAge} from "../../models/EmployeesService"

export const AgeSatistics: React.FC = () => {
    const employees: EmployeeProps[] = useSelector <any, EmployeeProps[]>(state => state.empl.employees)
    const AgesObg: MinMaxMiddleProps = statAge(employees)
    //console.log ("AgeSt: ", employees, AgesObg)
    return <Box> 
    <Typography sx={{fontSize: '1.5em'} }> Minimum age: {AgesObg.min} </Typography> 
   <Typography sx={{fontSize: '1.5em'}}> Maximum age: {AgesObg.max}  </Typography>
   <Typography sx={{fontSize: '1.5em'}}> Middle age: {AgesObg.middle.toFixed(2)} </Typography> 
      </Box>
}



