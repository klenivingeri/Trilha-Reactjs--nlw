
import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'
export function Countdown(){

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60); //Arredonda para baixo
    const seconds = time % 60 // vai pegar o resto do calculo 
    
    // padStart caso não tenha 2 caracteres ele vai pegar e joga o 0 na frente o numero que tiver
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRgith] = String(seconds).padStart(2,'0').split('')

    function startCountdown(){
        setActive(true);
    }
    useEffect(()=> {
        if(active && time > 0){
            setTimeout(()=> {
                setTime(time - 1);
            },1000)
        }
    }, [active, time])     //useEffect( Arrow function, [Array de dependencia]), quando o valor dentro da variavel alterar vai disparar uma ação
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
        <button type="button" 
                className={styles.coundownButton}
                onClick={startCountdown}>
            Iniciar Ciclo
        </button>


        </div>

    )
}