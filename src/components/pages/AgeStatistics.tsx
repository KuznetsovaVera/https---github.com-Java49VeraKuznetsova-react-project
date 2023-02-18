import React from 'react';
import {Box, Typography} from "@mui/material";
import { statAge } from '../../service/EmployeesService';
//import {useSelector} from 'react-redux';
// import { Employee } from '../../model/Employee';
import { Statistics } from '../Statistics';
import { statiscticsProps } from '../Statistics';
export const AgeStatistics: React.FC = () => {
  /*
    const employees: Employee[] = useSelector<any, Employee[]>(state => state.company.employees)
    const data = statAge(employees)
   // const name: string =  ""
    
    const statDateAge: statiscticsPropAge Statisticss = {
      name: ,
        statDate: {
            id: 1,
            minValue: data.minAge,
            maxValue: data.maxAge,
            avgValue: data.avgAge
        }
        
    }
    */
  //  console.log ("data", data)
   // console.log ("statDateAge", statDateAge)
  // const title: string = "Age Statistics"
   const statDataAge: statiscticsProps = {name: "Age Statistics", statFunc: statAge}
     return <Box>
     {Statistics(statDataAge)}
   
 </Box>
}


