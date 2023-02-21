
import { authActions } from '../../redux/authSlice';
import {useDispatch} from 'react-redux'
import { Button } from "@mui/material";
export const Logout: React.FC = ()=>{
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
}