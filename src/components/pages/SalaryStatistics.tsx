import React from 'react';
import {Box, Typography} from "@mui/material";
import { statSalary } from '../../service/EmployeesService';
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
import { statiscticsProps, Statistics } from '../Statistics';
export const SalaryStatistics: React.FC = () => {
    const employees: Employee[] = useSelector<any, Employee[]>
    (state => state.company.employees)
    const data = statSalary(employees);
    const statDateSalary: statiscticsProps = {
        name: 'Salary Statistics',
        statDate: {
            id: 1,
            minValue: data.minSalary,
            maxValue: data.maxSalary,
            avgValue: data.avgSalary
        }
    }
    return <Box>
        {Statistics(statDateSalary)}
    </Box>
}


