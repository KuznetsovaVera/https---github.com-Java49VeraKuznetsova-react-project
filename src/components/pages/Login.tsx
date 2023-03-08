import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
//import { Input } from "../Input";
import React from "react";
import {AuthService} from '../../service/AuthService';
import { LoginForm } from "../forms/LoginForm";
import { LoginData } from "../../model/LoginData";
import { Box } from "@mui/material";
const authService = new AuthService();
export const Login: React.FC = ()=>{
   
    const dispatch = useDispatch();
    function loginSubmit(loginData: LoginData): string {
        let message: string = '';
        try {
            authService.login(loginData);
            dispatch(authActions.login(loginData.username));
        }catch(e: any) {
            message = e
        }
        return message;
    }
    return <Box>
        
        <LoginForm submitFn={loginSubmit}/>
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
