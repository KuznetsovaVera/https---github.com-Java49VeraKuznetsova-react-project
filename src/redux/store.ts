import { configureStore } from "@reduxjs/toolkit";
import { emplReducer } from "./employeesSlice";
import { Provider } from 'react-redux'

export const store = configureStore ({
    reducer: {
        empl: emplReducer
    }
    
})