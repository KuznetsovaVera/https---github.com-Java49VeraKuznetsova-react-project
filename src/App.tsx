import React from 'react';
import { CounterMultiply } from './components/CounterMultuply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { useSelector} from 'react-redux';
import { Input } from './components/Input';
import './App.css'

function App() {
 const auth: string = useSelector<any, string>(state => state.auth.authenticated);
 const [operand, setOperand] = React.useState(1);  
 const [factor, setFactor] = React.useState(10);
 
   return <div> 
   {!auth &&
   <div>
          <Login></Login>
      </div>
   }   
   {    auth && <div>
      <p> current user name: {auth}</p>
        <Input placeHolder={'Enter operand'} inputProcess={function (value: string):
         string {
        setOperand(+value);
        return '';
      } }></Input>
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string):
         string {
        setFactor(+value);
        return '';
      } }></Input>
      </div>}
        
   { auth && 
   <div><CounterUpdater operand = {operand}></CounterUpdater>
   <CounterSquare></CounterSquare>
   <CounterMultiply factor = {factor}></CounterMultiply>
   </div>}
    {auth && <Logout></Logout>
    }  
   
   </div>  
 
}

export default App;
