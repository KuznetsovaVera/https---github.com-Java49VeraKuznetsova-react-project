import { Box } from "@mui/material"
import ListItem from "@mui/material/ListItem"
import { useSelector } from "react-redux"
import { EmployeeProps } from "../../models/employeeProps"


export const Employees: 
React.FC = () => {
const employees: EmployeeProps[] = useSelector <any, EmployeeProps[]>(state => state.empl.employees)
   //console.log ("Empl: inp", employees)

function getEmplItem (employees:Array<EmployeeProps>): JSX.Element[] {
    return employees.map ((empl, ind) => 
        <ListItem key={ind} >id: {empl.id}, name: {empl.name}, birthDate: {empl.birthDate},
        department: {empl.department}, salary: {empl.salary}</ListItem>
    )
    }

    return <Box borderColor="green" border={1}>
                    {getEmplItem(employees)}      
         </Box>
}
