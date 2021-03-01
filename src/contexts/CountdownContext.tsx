import { createContext, ReactNode, useContext, useState, useEffect} from "react";
import {ChallengesContext } from '../contexts/ChallengesContext'

interface CountdownContexData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{ 
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContexData )
let countdownTimeout: NodeJS.Timeout; /** Deve assinar com a setTimeout() para acessar clearTimeout(assinatura) o */

export function CountdownProvider({children}: CountdownProviderProps){
    
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60); //Arredonda para baixo
    const seconds = time % 60 // vai pegar o resto do calculo 
    
    
    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60)
    
    }
    useEffect(()=> {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=> {
                setTime(time - 1);
            },1000)
        }else if(isActive && time === 0){
           setHasFinished(true)
           setIsActive(false)
           startNewChallenge();
        }
    }, [isActive, time])     //useEffect( Arrow function, [Array de dependencia]), quando o valor dentro da variavel alterar vai disparar uma ação
    /*
    Quando o active mudar de false para true ele executa uma vez, depois quando o time mudar, ele vai executar novamente.
    */
    
    
    
    
    return(
        <CountdownContext.Provider 
        value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )

}






/**
  Estrutura basica de contexto

  import { createContext, ReactNode } from "react";


interface CountdownContexData{

}

interface CountdownProviderProps{ 
    children: ReactNode;
}
const CountdownContext = createContext({} as CountdownContexData )

export function CountdwonProdider({children}: CountdownProviderProps){
    return(
        <CountdownContext.Provider 
        value={{

        }}>
            {children}
        </CountdownContext.Provider>
    )

}
 */