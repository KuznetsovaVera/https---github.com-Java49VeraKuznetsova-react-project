import { PersonAdd } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { Employee } from "../../model/Employee"
import { Employees } from "./Employees"

type Props ={
    messageInp: string
    confirmFn: (param: any)=>boolean
    cancelFn: () => boolean
    idEmpl?: number
    employeeCurrent?: Employee

}

export const Confirmation: React.FC<Props> = ({messageInp, confirmFn, idEmpl, cancelFn, employeeCurrent}) => {
  
    const[open, setOpen] = React.useState<boolean>(true);
 console.log ("Conf", employeeCurrent)
 let message:string = ''
 if (idEmpl) {
  message = messageInp+' ' + idEmpl +'?' 
}
else {
     message = messageInp+'?'
}
  function handlerClose()  {
       setOpen (false);
    

    }
    function handlerConfirm() {
       
        setOpen (false);
        console.log ('remove Dial', idEmpl)
        if(employeeCurrent) {
            console.log ("Conf", employeeCurrent)
            confirmFn(employeeCurrent)
        }
        else { confirmFn(idEmpl);
        console.log ('remove Dial2', idEmpl)}
        
      

    }
    function handlerCancel() {
      
      cancelFn();
        setOpen(false);
      
    }
    return <Box>
        <Dialog
        open={open}
        onClose={handlerClose}
        aria-labelledby="alert-dialog-title"
        > 
        <DialogTitle id="alert-dialog-title">
            {message}
            </DialogTitle>    
            <DialogActions>
                <Button onClick={handlerConfirm}>Confirm</Button>
                <Button onClick={handlerCancel}>Cancel </Button>
            </DialogActions>
        </Dialog>
       
    </Box>
}