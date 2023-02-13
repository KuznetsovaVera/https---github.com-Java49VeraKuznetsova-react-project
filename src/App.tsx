import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { Customers } from './components/pages/Customers';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { layoutConfig } from './config/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Box, Typography } from '@mui/material';
//import { Typography } from '@mui/material/styles/createTypography';

  
    function App() {
        return <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigator className={layoutConfig.className}
                 routes={layoutConfig.routes}  />}>
                    <Route index element={<Home/>}></Route>
                    <Route path='customers' element={<Customers/>}/>
                    <Route path='orders' element={<Orders/>}></Route>
                    
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
