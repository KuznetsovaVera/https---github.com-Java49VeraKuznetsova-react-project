import { Menu } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, 
    List, ListItem, ListItemText, Typography,  IconButton, Toolbar } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { Employee } from "../../model/Employee";
import { NavigatorProps } from "../../model/NavigatorProps";
import { RouteType } from "../../model/RouteType";
//import navigatorConfig from '../../config/navigator-config.json'


export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {
   // TODO Navigator based on Drower
   const [tabNumber, setTabNumber] = React.useState(0);
   const [open, setOpen] = React.useState<boolean>(false);
   const location = useLocation();
   //const{drawerWidth} = navigatorConfig;
   const handlerDrawerOpen = () => {
    setOpen(true);
     }
   const handlerDrawerClose =() => {
    setOpen(false)
   }
  
    const navigate = useNavigate();
    useEffect(() => {
        if(routes.length != 0) {
              navigate(routes[0].path)
        }
      //  setTabNumber(0)
        },[routes]);
  
  function getListMenu():ReactNode {
   return routes.map((r,index)=> <Divider>
   
        <ListItem divider component={Link} to={r.path} key={index}>
           <ListItemText primary= {r.label} />
        </ListItem>
    </Divider> )
  }

  function getCurPageName (): string {
    /*
    const curPageName: string =  routes.reduce((curLab, r) => {
      if(location.pathname === r.path)
        curLab = r.label;
        return curLab;
    },'')
    */
   const curRoute:RouteType | undefined = routes.find(r => location.pathname === r.path)
    return curRoute? curRoute.label : '';
    }


    return <Box sx={{ marginTop: "25vh"}}>
    <AppBar sx={{ backgroundColor: "lightgray" }}>
      <Toolbar variant="regular">
       <IconButton color="primary" onClick={handlerDrawerOpen}>
        <Menu/>   </IconButton>
       <Typography component='h3' color={'primary'}> 
       {getCurPageName()}  </Typography>
         </Toolbar>
    </AppBar>
        {(open) &&
        <Drawer variant="permanent" anchor="left" open={open}
         onClick={handlerDrawerClose}>
            {getListMenu()}
        </Drawer>
        }
          
    <Outlet></Outlet>
</Box>
        
}




