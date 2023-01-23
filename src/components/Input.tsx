import React, { useEffect} from "react";
import { Alert } from "./Alert";
type InputProps = {
    inputProcess: (value: string)=>string;
    placeHolderPrint: string;
}
export const Input: React.FC<InputProps> = ({inputProcess, placeHolderPrint}) => {
    let inputElement: HTMLInputElement | null
   
    const [message, setMessage] = React.useState('')
    const inputId =
    React.useRef(Math.round(Math.random() * 100000000) + '');   
    function processGo(): void {
       setMessage('')
        const messageRet: string = inputProcess(inputElement!.value);
        
        if (messageRet == '') {
            inputElement!.value = '';
        } else {
            
            setMessage(messageRet);

        }
        
    }
    useEffect(() => {
       inputElement = document.getElementById(inputId.current) as HTMLInputElement;
    })
    return <div>
        <input id={inputId.current} placeholder={placeHolderPrint}/>
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} message={message}/>}
    </div>
}
