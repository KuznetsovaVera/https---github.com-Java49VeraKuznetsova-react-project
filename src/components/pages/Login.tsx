import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from "./Input";
import React from "react";
import { Box, Typography } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";

export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    
    return <Box>
       <LoginForm></LoginForm>
        </Box>
}