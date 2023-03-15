import {createSlice} from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
import { Company } from '../service/Company';
import { CompanyFirebase } from '../service/CompanyFirebase';
import { codeActions } from './codeSlice';

const company = new CompanyFirebase();


const initialState: {employees: Employee[]} = {
    employees:[]
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
       setEmployees: (state, data) => {
        state.employees = data.payload;
       }
    }
})

export const employeesReducer = employeesSlice.reducer;
const actions = employeesSlice.actions;

export const employeesActions: any = {
    addEmployee : (empl:Employee) => {
        return async (dispatch: any) => {
          try {  
           await company.addEmployee(empl); 
           try {
              const employees = await company.getAllEmployees();
              dispatch(actions.setEmployees(employees));
              dispatch(codeActions.setCode("OK")); 
              console.log("add1");
              } catch(e) {
                  dispatch (codeActions.setCode("Unknown Error"))
                  console.log ("add2")
                       } 
                 } catch (e) {
             dispatch (codeActions.setCode("Authorization error"))
             console.log ("add4")
                             }
        }
    },
    updateEmployee : (empl: Employee) => {
        return async (dispatch: any) => {
           try { 
           await company.updateEmployee(empl); 
              try {
            dispatch(codeActions.setCode("OK")); 
            const employees = await company.getAllEmployees();
              dispatch(actions.setEmployees(employees));
                  }       catch(e) {
                    dispatch (codeActions.setCode("Unknown Error"))
                 }
                } catch (e) {
            
            dispatch (codeActions.setCode("Authorization error"))
        }
    }
    },
    removeEmployee : (id:number) => {
        return async (dispatch: any) => {
            try {
           await company.removeEmployee(id); 
           try {
            dispatch(codeActions.setCode("OK")); 
            const employees = await company.getAllEmployees();
              dispatch(actions.setEmployees(employees));
                  }       catch(e) {
                    dispatch (codeActions.setCode("Unknown Error"))
                 }
                } catch (e) {
            
            dispatch (codeActions.setCode("Authorization error"))
        }
    }
    },
    getEmployees: () => {
        return async (dispatch: any) => {
           try {
           const employees = await company.getAllEmployees();
           dispatch(actions.setEmployees(employees)) 
           dispatch(codeActions.setCode("OK")); 
        } catch (e) {
            dispatch (codeActions.setCode("Unknown Error"))
        }
        }
    },
addBulkEmployess: (employeesAr: Employee[]) => {
    return async (dispatch: any) => {
        try {
        employeesAr.forEach(async (empl) => await company.addEmployee(empl))
         try {
        dispatch(codeActions.setCode("OK")); 
        const employees = await company.getAllEmployees();
        dispatch(actions.setEmployees(employees));
           } catch(e) {
            dispatch (codeActions.setCode("Unknown Error"))
           } 
      
    } catch (e) {
               dispatch (codeActions.setCode("Authorization error"));
    }
}
}
    
}

