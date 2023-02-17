import React from 'react';
import {Box, Typography} from "@mui/material";
import { statAge } from '../../service/EmployeesService';
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
import { statiscticsProps, Statistics } from '../Statistics';
export const AgeStatistics: React.FC = () => {
    const employees: Employee[] = useSelector<any, Employee[]>(state => state.company.employees)
    const data = statAge(employees)
    const statDateAge: statiscticsProps = {
        name: "Age Statistics",
        statDate: {
            id: 1,
            minValue: data.minAge,
            maxValue: data.maxAge,
            avgValue: data.avgAge
        }
        
    }
    console.log ("data", data)
    console.log ("statDateAge", statDateAge)
/*
    return <Box>
        <Typography>{JSON.stringify(statAge(employees))}</Typography>
      
    </Box>
    */
     return <Box>
     {Statistics(statDateAge)}
   
 </Box>
}

//{Statistics(statDateAge)}
