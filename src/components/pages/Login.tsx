import { authActions } from "../../redux/authSlice";
import {useDispatch, useSelector} from 'react-redux'
//import { Input } from "../Input";
import React from "react";
import {AuthService} from '../../service/AuthService';
import { LoginForm } from "../forms/LoginForm";
import { LoginData } from "../../model/LoginData";
import { Box } from "@mui/material";
import { CodeType } from "../../model/CodeType";

export const Login: React.FC = ()=>{
   
    const dispatch = useDispatch<any>();
    const code: CodeType = useSelector<any, CodeType>(state=>state.errorCode.code )
    function loginSubmit(loginData: LoginData): void {
       
            dispatch(authActions.login(loginData));
        
       
    }
    return <Box>
        
        <LoginForm submitFn={loginSubmit} code={code}/>
        </Box>
}

/* my code
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    const authService = new AuthService();
const mes = useRef<string>('');
const mesType: string = 'Wrong login - password, try again'
const [flAlert, setflAlert] = useState<boolean>(false);


   return <Box>
       <LoginForm submitFn={function (loginData:LoginData): boolean{
      
      try{ authService.login(loginData)
         dispatch(authActions.login(loginData.username))
         setflAlert(false)
      } catch (m) {
        mes.current = mesType;
        setflAlert(true)
      } 
       return true;
       }} message = {mes.current} flAlert = {flAlert}></LoginForm>

        </Box>
}
*/
