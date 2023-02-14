import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [{}],
    index: 0
   
};
const EmployeesSlice = createSlice ({
initialState: initialState,
name: "empl",
reducers: {
    addEmployee: (state, data) => {
        console.log("sl, inp", data.payload) 
        console.log ("sl, stEmp", state.employees[0])
       state.employees.push(data.payload);
       if (state.index === 0) {
       state.employees.shift();  
       state.index = 1; 
       //state.employees= state.employees.slice(0,1);
       console.log("sl, slice",state.employees)
       }
     //  
    }

}
})
export const emplActions = EmployeesSlice.actions;
export const emplReducer = EmployeesSlice.reducer