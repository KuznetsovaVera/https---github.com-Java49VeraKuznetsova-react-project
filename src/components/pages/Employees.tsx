import React, { ReactNode, useRef, useState } from 'react';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit, PersonAdd } from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
//import './DialogAlert' ;
import { Confirmation } from './Confirmation';
import { Console } from 'console';

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const authUser = useSelector<any, string>(state => state.auth.authenticated);
    const editId = useRef<number>(0);
    const idRemove = useRef<number>(0)
    const [flRemove, setFlRemove] =useState<boolean>(false)
    let rem: number = -1;
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
                               /* onClick={() =>
                            { 
                                    dispatch(employeesActions.removeEmployee(+params.id));
                                  
                                }
                            } */
                          
                          
                          onClick={()=> { console.log("params",+params.id)
                          rem = +params.id 
                          setFlRemove(true)
                          idRemove.current = +params.id
                        console.log("idRemove",idRemove.current, rem, flRemove)
                    }
                       }
                            />,
                    <GridActionsCellItem label="update" icon={<Edit />}
                        onClick={() => {
                            editId.current = +params.id;
                            setFlEdit(true)
                        }
                        } />,
                       
                ] : [];
            }
        }

    ])
    const [flEdit, setFlEdit] = useState<boolean>(false);
    const [flAdd, setFlAdd] = useState<boolean>(false);
    
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    

    function getComponent(): ReactNode {
        let res: ReactNode = <Box sx={{ height: "70vh", width: "80vw" }}>
                <DataGrid columns={columns.current} rows={employees}/>
                {authUser.includes("admin") && <IconButton onClick={() => setFlAdd(true)}><PersonAdd/></IconButton>}
        </Box>
        if (flEdit) {
            res = <EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeesActions.updateEmployee(empl));
                setFlEdit(false);
                return true;
            } } employeeUpdate = {employees.find(empl => empl.id == editId.current)} />
        } else if (flAdd) {
            res = 
                <EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeesActions.addEmployee(empl));
                setFlAdd(false);
                return true;
            } }/>
        }
        else if (flRemove) {
          
             res = <Confirmation confirmFn={function (id:number):boolean {
                dispatch(employeesActions.removeEmployee(idRemove.current))
               // console.log("1", idRemove.current, rem, flRemove)
               // idRemove.current = 0;
               setFlRemove(false);
                return true; 
             }} messageInp = 'Are you sure to remove employee with ID'
                idEmpl={idRemove.current} 
                cancelFn={function (): boolean {
                    setFlRemove(false);
                    return true;
                }}/>
              
        }
        return res;
    }
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        {getComponent()}
    </Box>
}
function getListItems(employees: Employee[]): React.ReactNode {
    return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
}