import { createSlice } from "@reduxjs/toolkit";
import { EmployeeProps } from "../models/employeeProps";

const empl: EmployeeProps[]=[]
const initialState = {
    employees: empl,
  
   
};
const EmployeesSlice = createSlice ({
initialState: initialState,
name: "empl",
reducers: {
    addEmployee: (state, data) => {
      state.employees.push(data.payload);
       console.log("Slice",state.employees)
         }
}
})
export const emplActions = EmployeesSlice.actions;
export const emplReducer = EmployeesSlice.reducer