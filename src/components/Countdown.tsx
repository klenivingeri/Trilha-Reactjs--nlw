
import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive, 
        resetCountdown,
        startCountdown } = useContext(CountdownContext)
    
    // padStart caso não tenha 2 caracteres ele vai pegar e joga o 0 na frente o numero que tiver
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRgith] = String(seconds).padStart(2,'0').split('')

   

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