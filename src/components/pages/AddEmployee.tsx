import Button from "@mui/material/Button"
import { useDispatch } from "react-redux";
import { EmployeeProps } from "../../models/employeeProps"
import { createRandomEmplyee } from "../../models/EmployeesService"
import { emplActions } from "../../redux/employeesSlice";
import React from "react";



export const AddEmployee: React.FC=() => {
  
const dispatch = useDispatch();
//const value: EmployeeProps = createRandomEmplyee();
//const a = dispatch(emplActions.addEmployee(value));
//console.log("Empl, a", a)
//return <Button onClick={dispatch(emplActions.addEmployee(createRandomEmplyee))}>Create new employee</Button>
return <Button onClick={() => {
    dispatch(emplActions.addEmployee(createRandomEmplyee()));
}}> Create new employee</Button>
}