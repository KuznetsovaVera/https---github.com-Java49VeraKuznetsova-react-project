import React from 'react';
import {Box,  ListItem, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const employees: Employee[] = useSelector<any, Employee[]>(state => state.company.employees);
    const authUser: string = useSelector<any, string>(state => state.auth.authenticated); 
   
    const columns=React.useRef<GridColumns>([
        {field: 'name', headerClassName:'header', headerName: 'Employee Name',
         flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'birthDate', headerName: 'Date of Birth', flex: 1,headerClassName:'header',
         type:"date",headerAlign: 'center',align: 'center'},
        {field: 'department', headerName: 'Department',headerClassName:'header',
         flex: 1,headerAlign: 'center',align: 'center'},
        {field: 'salary', headerName: "Salary (NIS)", headerClassName:'header',
        flex: 0.7, type: "number",headerAlign: 'center', align: 'center'},
        {field: 'actionsEdit', type: 'actions', getActions: (params) => {
           return authUser.includes('admin')  ?
           [
           <GridActionsCellItem label='edit' icon={<Edit/>}
           onClick={()=>dispatch(employeesActions.updateEmployee(params))}></GridActionsCellItem>,
           <GridActionsCellItem label="remove" icon={<Delete/>}
           onClick={() => dispatch(employeesActions.removeEmployee(+params.id))}></GridActionsCellItem>
           ] : []
        }}
       
    ])
    
    
    return <Box sx={{height: '80vh', width: '80vw'}}>
        <DataGrid columns={columns.current} rows={employees}/>
          
    </Box>
}
