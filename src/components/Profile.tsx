import styles from '../styles/components/profile.module.css'

export function Profile(){

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/klenivingeri.png" alt="" />
            <div> 
                <strong>Erick Kleniving</strong>
                <p>
                <img src="icons/level.svg" alt="level" />
                level 1
                </p>
            </div>
        </div>

    )
}