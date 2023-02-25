import React, { useState } from 'react';
import { Box, Button, IconButton, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit, PersonAdd } from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const authUser = useSelector<any, string>(state => state.auth.authenticated);
    const [flEdit, setFlEdit] = React.useState<boolean>(false)
    const emplEdit = React.useRef<Employee>();
    const [flAdd, setFlAdd] = React.useState<boolean>(false);
    const columns = React.useRef<GridColumns>([
        {
            field: 'name', headerClassName: 'header', headerName: 'Employee Name',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'birthDate', headerName: 'Date of Birth', flex: 1, headerClassName: 'header',
            type: "date", headerAlign: 'center', align: 'center'
        },
        {
            field: 'department', headerName: 'Department', headerClassName: 'header',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'salary', headerName: "Salary (NIS)", headerClassName: 'header',
            flex: 0.7, type: "number", headerAlign: 'center', align: 'center'
        },
        {
            field: 'actions', type: "actions", getActions: (params) => {
                return authUser.includes('admin') ? [
                    <GridActionsCellItem label="remove" icon={<Delete />}
                        onClick={() =>
                            dispatch(employeesActions.removeEmployee(+params.id))} />,
                    <GridActionsCellItem label="update" icon={<Edit />}
                        onClick={() => {
                           
                            setFlEdit(true);
                           const empl  = employees.find(el=> 
                                               el.id === +params.id)  
                          if(empl) { 
                            emplEdit.current = {...empl};
                        }
                          
                            console.log ("empEdit2", emplEdit.current);                        
                       
                        }
                        } />
                ] : [];
            }
        }

    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    
    function addNewEmployee (): void {
     console.log("setFlAdd1", flAdd)
       setFlAdd(true);
        console.log("setFlAdd2", flAdd)

    }
    return <Box> 
      {!flEdit && !flAdd &&
       <Box sx={{ height: "70vh", width: "80vw" }}>
        <DataGrid columns={columns.current} rows={employees} />
        
    </Box>
    } 
     {!flEdit && !flAdd && authUser.includes('admin') && 
    <Box sx={{ display:"flexbox", textAlign:"center" }}>
    <IconButton size="medium" color='primary'  onClick={addNewEmployee} >
   <PersonAdd></PersonAdd>
    </IconButton>
    </Box>
    }
    {flEdit && !flAdd &&
    <EmployeeForm  submitFn={(employee) =>
        {dispatch(employeesActions.updateEmployee(employee));
         setFlEdit(false)   
        return true;}} 
        employeeUpdate = {emplEdit.current}  />

    }
    {flAdd && !flEdit &&
        <EmployeeForm  submitFn={(employee) =>
            {dispatch(employeesActions.addEmployee(employee));
            setFlAdd(false) 
            return true;}} 
              />
    }
  
    </Box>

}
