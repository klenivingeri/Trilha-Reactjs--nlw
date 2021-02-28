import { createContext, useState, ReactNode } from 'react';
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
    activeChallenge:  Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface ChallengesProviderProps{ /** _App  */
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience,setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)
    function levelUp(){ setLevel(level + 1) }

    function startNewChallenge(){
        const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex];
        setActiveChallenge(challenge)

        }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            levelUp,
            startNewChallenge}}> 
        {children}
        </ChallengesContext.Provider>
    )
}