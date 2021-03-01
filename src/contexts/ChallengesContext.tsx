import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json'


interface Challenge{ // json
    type: 'body'| 'eye';
    description: string;
    amount:number
}


interface ChallengesContextData{ /** apresenta oque precisa ser retornado*/
    level:number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel:number;
    activeChallenge:  Challenge;
    completeChallenge: () => void;
    resertChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface ChallengesProviderProps{ /** _App  */
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){

    const [level, setLevel] = useState(1); // level
    const [currentExperience, setCurrentExperience] = useState(0); //Expeciencia do usuario
    const [challengesCompleted, setChallengesCompleted] = useState(0);  //Quantidade de quests do usuario

    const [activeChallenge, setActiveChallenge] = useState(null) // Controla Quest
    
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2) //Experiencia para proximo nivel
    
    useEffect( () =>{
        Notification.requestPermission();


    },[]) // Array vazio significa que a função vai executar apenas uma vez


    function levelUp(){ setLevel(level + 1) }
    function startNewChallenge(){
        const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex];
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission == 'granted'){ //granted é quando o usuario da permissão
            new Notification('Novo desafio!',{
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }
    
    function resertChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel

            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            completeChallenge,
            resertChallenge,
            levelUp,
            startNewChallenge}}> 
        {children}
        </ChallengesContext.Provider>
    )
}