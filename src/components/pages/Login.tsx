import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from "./Input";
import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";
import { LoginData } from "../../model/LoginData";
import { current } from "@reduxjs/toolkit";


export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    const authService = new AuthService();
const mes = useRef<string>('');
//const mesType: string = 'Wrong login - password, try again'
const [flAlert, setflAlert] = useState<boolean>(false);
//const loginData = useRef()
/*
function checkLogin (){
    try{ authService.login(loginData.current)
        dispatch(authActions.login(loginData.current.username))
     } catch (m) {
       mes.current = mesType;
     }
}
*/
   return <Box>
       <LoginForm submitFn={function (loginData:LoginData): boolean{
      
      try{ authService.login(loginData)
         dispatch(authActions.login(loginData.username))
         setflAlert(false)
      } catch (m) {
        mes.current = String(m);
        setflAlert(true)
      } 
       return true;
       }} message = {mes.current} flAlert = {flAlert}></LoginForm>

        </Box>
}
/*
<Confirmation confirmFn={confirmFn.current} open={open}
title={title.current} content={content.current}></Confirmation>
}
*/