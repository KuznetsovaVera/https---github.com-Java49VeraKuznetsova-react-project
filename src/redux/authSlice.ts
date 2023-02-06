import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    authenticated: ''
}
const authSlice = createSlice ({
    initialState: initialState,
    name: "auth",
    reducers: {
        login: (state, data) => {
           
            state.authenticated = data.payload.indexOf('admin')!== -1 ?
            data.payload : 'noAdmin';
            /*
            if(data.payload.indexOf('admin')) {
                state.authenticated = data.payload;
            }
            else {
                state.authenticated = '';
            } */
        },
        logout: (state) => {
            if(state.authenticated.length > 0) {
                state.authenticated = '';
            }
        }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;