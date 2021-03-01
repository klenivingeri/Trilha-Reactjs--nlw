import styles from '../styles/components/profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'
export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/klenivingeri.png" alt="" />
            <div> 
                <strong>Erick Kleniving</strong>
                <p>
                <img src="icons/level.svg" alt="level" />
                level {level}
                </p>
            </div>
        </div>

    )
}