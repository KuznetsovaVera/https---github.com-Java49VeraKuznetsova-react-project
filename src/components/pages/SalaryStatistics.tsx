import React from 'react';
import {Box} from "@mui/material";
import { statSalary } from '../../service/EmployeesService';
import { Statistics } from '../Statistics';
export const SalaryStatistics: React.FC = () => {
 
    return <Box>
        {Statistics({name: "Salary Statistics", statFunc: statSalary})}
    </Box>
}



