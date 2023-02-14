import Button from "@mui/material/Button"
import { useDispatch } from "react-redux";
import { createRandomEmplyee } from "../../models/EmployeesService"
import { emplActions } from "../../redux/employeesSlice";
import React from "react";

export const AddEmployee: React.FC=() => {
  const dispatch = useDispatch();

return <Button onClick={() => {
    dispatch(emplActions.addEmployee(createRandomEmplyee()));
}}> Create new employee</Button>
}