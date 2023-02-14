import { configureStore } from "@reduxjs/toolkit";
import { emplReducer } from "./employeesSlice";


export const store = configureStore ({
    reducer: {
        empl: emplReducer
    }
    
})