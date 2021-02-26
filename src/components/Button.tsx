import { useState } from 'react'

interface ButtonProps{
    color: string;
    children:string;
}


export function Button(props: ButtonProps){

    const [counter, setCounter] = useState(1)

    function Increment(){
        setCounter(counter + 1)
    }

    return(
     
        <button type="button" 
                onClick={ Increment}
                style={{backgroundColor: props.color}}>
          { props.children} <strong>{counter}</strong>
        </button>
    );
}