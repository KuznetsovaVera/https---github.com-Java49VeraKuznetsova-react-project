import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { layoutConfig } from './config/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Employees } from './components/pages/Employees';
import { SalarySatistics } from './components/pages/SalaryStatistics';
import { AgeSatistics } from './components/pages/AgeStatistics';
import { AddEmployee } from './components/pages/AddEmployee';

 
    function App() {
       
        return <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigator className={layoutConfig.className}
                 routes={layoutConfig.routes}  />}>
                    <Route index element={<Employees/>}></Route>
                    <Route path='addEmployee' element={<AddEmployee/>}></Route>
                    <Route path='ageStatistics' element={<AgeSatistics />}/>
                    <Route path='salaryStatistics' element={<SalarySatistics />}>
                        
                    </Route>                                     
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
