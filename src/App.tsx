import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { layoutCongig } from './models/layout-config';
import { productsCongig } from './models/products-config';
import { Navigator } from './components/navigators/Navigator';



function App() {
  
  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator navConf= {layoutCongig}/>}>
              <Route index element={<Home/>}></Route>
              <Route path='customers' element={<Customers/>}/>
              <Route path='orders' element={<Orders/>}></Route>
              <Route path='products' element={<Navigator navConf ={productsCongig}/>}>
                    <Route path='dairy' element={<DairyProducts/>}/>
                    <Route path='bread' element={<BreadProducts/>}/>
              </Route>
          </Route>
              
      </Routes>
  </BrowserRouter>

}
export default App;
