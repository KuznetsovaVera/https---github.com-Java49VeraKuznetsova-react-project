import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useSelector } from 'react-redux';
import { Logout } from './components/pages/Logout'
import { Login } from './components/pages/Login';
import React, { useEffect } from 'react';


function App() {
const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
console.log (authUser)
const[routes, setRoutes] = React.useState(layoutConfig.routes)

//const [tabNumber, setTabNumber] = React.useState(0);
//const navigate = useNavigate();


//useEffect(() =>  navigate(routes[0].path),[])
/*
function changeTabNumber(event: any, newNumber: number) {
    setTabNumber(newNumber);
}
*/
React.useEffect(() => {

let routRoutes: {path: string, label: string, flAdmin: boolean, flAuth: boolean}[]=[];
if (!authUser) {
  routRoutes = layoutConfig.routes.filter (routes => 
    !routes.flAuth 
         )

 }
 else if (!authUser.includes('admin')) {
  routRoutes = layoutConfig.routes.filter (routes => 
    routes.flAdmin )
    
     }
 else {
  routRoutes = layoutConfig.routes.filter (routes => 
                                 routes.flAuth
        )
       
 }
 console.log ("1", routRoutes);
  setRoutes(routRoutes);
 },[authUser])

console.log("2", routes)
  return <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigator routes={routes}  />}>
              <Route index element={<Employees/>}/>
              <Route path='add' element={<AddEmployee/>}/>
              <Route path='statistics/age' element={<AgeStatistics/>}/>
              <Route path='statistics/salary' element={<SalaryStatistics/>}/>
              <Route path ='login' element = {<Login/>}/>
              <Route path='logout' element = {<Logout/>}></Route> 
          </Route>
           
                  
      </Routes>
  </BrowserRouter>

}
export default App;
