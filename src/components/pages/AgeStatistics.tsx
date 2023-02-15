import React from 'react';
import {Box, Typography} from "@mui/material";
import { statAge } from '../../service/EmployeesService';
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>
    (state => state.employees.employees)
    return <Box>
        <Typography>{JSON.stringify(statAge(employees))}</Typography>
    </Box>
}

