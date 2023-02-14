import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../models/navigatorProps";
//import "./navigator.css";

type Props = {
    navConf: NavigatorProps;
}
export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) =>{
    const [tabNumber, setTabNumber] = React.useState(0);
    function changeTabNumber(event: any, newNumber: number) {
         setTabNumber(newNumber);
    }
   
   function getNavItems (routes: { path: string; label: string }[]): React.ReactNode  {
        return routes.map((r, index) => <Tab component= {Link} to ={r.path} 
        label = {r.label} key={index}/>)
    }
return <Box sx={{marginTop: "15vh"}}>
    <AppBar sx={{backgroundColor: 'lightgray'}}> 
        <Tabs value={tabNumber} onChange={changeTabNumber}>
            {getNavItems(routes)}
        </Tabs>
    </AppBar>
    <Outlet></Outlet>
</Box>

/*
<div>
    <nav>
    <ul className={navConf.classNameList}>
    {getItems()} 
                </ul> 
    </nav>
    <Outlet></Outlet>
</div>
*/
}
