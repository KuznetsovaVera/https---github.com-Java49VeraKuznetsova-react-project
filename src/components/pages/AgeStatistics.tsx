
import { Box, Typography } from "@mui/material"
import { EmployeeProps } from "../../models/employeeProps"
import {minMaxMiddleAge, MinMaxMiddleProps} from "../../models/EmployeesService"


type Props = {
    employess: EmployeeProps[]
}

export const AgeSatistics: React.FC<Props> = (props) => {
    
    const AgesObg: MinMaxMiddleProps = minMaxMiddleAge(props.employess)
    console.log ("AgeSt: ", props, AgesObg)
    return <Box> 
    <Typography sx={{fontSize: '1.5em'} }> Minimum age: {AgesObg.min} </Typography> 
   <Typography sx={{fontSize: '1.5em'}}> Maximum age: {AgesObg.max}  </Typography>
   <Typography sx={{fontSize: '1.5em'}}> Middle age: {AgesObg.middle.toFixed(2)} </Typography> 
  
    </Box>
}



