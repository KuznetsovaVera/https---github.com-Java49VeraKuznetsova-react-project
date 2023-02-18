import { Construction } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../model/Employee";
import { statDataType } from "../service/EmployeesService";
export type statiscticsProps ={
    name: string;
    statFunc: (empl: Employee[]) => statDataType;
}


export const Statistics: React.FC<statiscticsProps> = ({name, statFunc}) => {
    const employees: Employee[] = useSelector<any, Employee[]>(state => state.company.employees)
  
  const row: statDataType = employees.length ? statFunc(employees) : {min: 0, max:0, avg: 0}
  
    const columns = React.useRef<GridColumns> ([
        {field: 'min', headerName: 'Minimal Value',
        flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'max', headerName: 'Maximal Value',
        flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'avg', headerName: 'Average Value',
        flex: 1, headerAlign: 'center', align: 'center' }
    ])


    return <Box sx={{height: '80vh', width: '80vw'}}>
         <Typography sx={{textAlign: 'center', fontStyle: 'italic', fontWeight:'bold'}}>{name}</Typography> 
    <DataGrid columns={columns.current} rows={[{id: 1,...row}]}/>
      </Box>
}


