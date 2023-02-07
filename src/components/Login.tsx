import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { Input } from './Input';
import React from 'react';

const ADMIN = 'admin';

export const Login: React.FC = () => {
const [userName, setUser] = React.useState('');
const dispatch = useDispatch();
   
   function getUserName (userName: string) : string {
    let res: string = '';
    res = userName.includes(ADMIN) ? '' : 'No Admin';
    setUser(userName);
    return res;
   }

    return <div>
   <Input placeHolder={'Enter user name'} inputProcess={getUserName} ></Input>
   <p> current user name: {userName}</p>
   <p> Please, put login, then press GO, if correct press Login</p>   
    <button onClick={() => dispatch(authActions.login(userName))}>Login</button>
    </div>
}
