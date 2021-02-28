
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout; /** Deve assinar com a setTimeout() para acessar clearTimeout(assinatura) o */

export function Countdown(){
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60); //Arredonda para baixo
    const seconds = time % 60 // vai pegar o resto do calculo 
    
    // padStart caso não tenha 2 caracteres ele vai pegar e joga o 0 na frente o numero que tiver
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRgith] = String(seconds).padStart(2,'0').split('')

    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
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
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div >
                <span>{secondLeft}</span>
                <span>{secondRgith}</span>
            </div>
        </div>

        {hasFinished ? (
            <button 
                disabled
        	    className={`${styles.coundownButton}`}>
                Ciclo encerrado!
            </button>
        
            ):(<>
                {isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.coundownButton} ${styles.coundownButtonActive}`}
                    onClick={resetCountdown}>
                        Abandonar ciclo
                    </button>

                ) : (
                    <button 
                    type="button" 
                    className={`${styles.coundownButton}`}
                    onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
                    )}
                </>
           
            )
        }

        

        </div>

    )
}