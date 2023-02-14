import { Box } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { JsxElement } from "typescript"
import { EmployeeProps } from "../../models/employeeProps"
import "../navigators/navigator.css"
type Props = {
    employess: EmployeeProps[]
}




export const Employees: 
React.FC<Props> = ({employess}) => {
const employee = useSelector <any, EmployeeProps>(state => state.employee)
   console.log ("Empl: inp", employess)
function getEmplItem (employees:Array<EmployeeProps>): JSX.Element[] {
    return employees.map ((empl, ind) => 
        <ListItem key={ind} >id: {empl.id}, name: {empl.name}, birthDate: {empl.birthDate},
        department: {empl.department}, salary: {empl.salary}</ListItem>
    )
    }

    //let a= getEmplItem(employess)
    return <Box>
        
         <List className="navigator-list-layout">
         {getEmplItem(employess)}
         </List>
       
      <Outlet></Outlet>
    </Box>
}
/*
{getEmplItem(employess)}
 {getEmplItem(props)}
<List>
        <ListItem>
'Hello'
        </ListItem>
    </List>
    */
/*

import "./navigator.css";

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

<AppBar sx={{backgroundColor: 'lightgray'}}> 
        <Tabs value={tabNumber} onChange={changeTabNumber}>
            {getNavItems(routes)}
        </Tabs>


import { Typography } from "@mui/material";


export const Home: React.FC = () => 
<Typography sx={{fontSize:'2em'}}>Home</Typography>

*/