import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from "./Input";
import React from "react";
import { Box, Typography } from "@mui/material";
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    
    return <Box>
        <Typography>Login</Typography>
        <Input placeHolder={"Type username for login"} inputProcess={function (value: string): string {
            dispatch(authActions.login(value))
            return '';
        } }></Input>
        
        </Box>
}