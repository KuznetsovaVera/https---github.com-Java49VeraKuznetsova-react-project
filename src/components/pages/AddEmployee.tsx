import React from 'react';
import {Alert, Box, Button} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
import { CodeType } from '../../model/CodeType';
import { codeActions } from '../../redux/codeSlice';
export const AddEmployee: React.FC = () => {
    const code: CodeType = useSelector<any, CodeType>(state=>state.errorCode.code );
    const dispatch = useDispatch<any>();
    return <Box> 
    <EmployeeForm  submitFn={(employee) =>
     {dispatch(employeesActions.addEmployee(employee));
     return true;}}/>
{code !== "OK" && <Alert severity='error'
             onClose={() => {
                dispatch(codeActions.setCode("OK"));
                                }}>{code}</Alert>}
</Box>
}