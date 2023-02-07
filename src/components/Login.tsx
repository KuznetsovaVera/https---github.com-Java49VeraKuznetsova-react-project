import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import { Input } from "./Input";

type Props = {
    userName: string;
}
export const Login: React.FC<Props> = ({userName}) => {
   const dispatch = useDispatch();
    return <div>
   <p> Please, put login, then press GO, if correct press Login</p>
  
    <button onClick={() => dispatch(authActions.login(userName))}>Login</button>
    </div>
}

