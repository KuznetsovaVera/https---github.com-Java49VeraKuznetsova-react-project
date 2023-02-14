import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { layoutConfig } from './config/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Box, Typography } from '@mui/material';
import { Employees } from './components/pages/Employees';
import { SalarySatistics } from './components/pages/SalaryStatistics';
import { AgeSatistics } from './components/pages/AgeStatistics';
import { AddEmployee } from './components/pages/AddEmployee';
import { EmployeeProps } from './models/employeeProps';
import { useSelector } from 'react-redux';

  
    function App() {
        const employees: EmployeeProps[] = useSelector <any, EmployeeProps[]>(state => state.empl.employees)
       console.log ("APP", employees)
       //
        const probaEmpl1: EmployeeProps = {
            id: 34,
            name: 'Vera',
            department: '??',
            birthDate: '2020-01-02',
            salary: 3000

        }
        const probaEmpl2: EmployeeProps = {
            id: 35,
            name: 'Vera2',
            department: '??',
            birthDate: '2015-01-02',
            salary: 5000

        }//
        return <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigator className={layoutConfig.className}
                 routes={layoutConfig.routes}  />}>
                    <Route index element={<Employees employess={employees}/>}></Route>
                    <Route path='addEmployee' element={<AddEmployee/>}></Route>
                  
                    <Route path='ageStatistics' element={<AgeSatistics employess={employees}/>}/>
                    <Route path='salaryStatistics' element={<SalarySatistics employess={employees}/>}></Route>
                  
                    
                    
                </Route>
                    
            </Routes>
        </BrowserRouter>
      
      }
export default App;

 /*
 return <Box sx={{width: '50vw', height: '50vh', border: 'solid 1px red', 
 textAlign: 'center',
background: {xs: 'red', sm: 'green', md: 'black'}
}}><Typography sx={{fontSize: {xs:'1.2em', sm:'2em'}}}>AnyText</Typography> </Box>
*/
