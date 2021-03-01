import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookie from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';


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
    closeLevelUpModal: () => void;
    completeChallenge: () => void;
    resertChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface ChallengesProviderProps{ /** _App  */
    children: ReactNode;
    level:number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1); // level
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0); //Expeciencia do usuario
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);  //Quantidade de quests do usuario

    const [activeChallenge, setActiveChallenge] = useState(null) // Controla Quest
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
    
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2) //Experiencia para proximo nivel

    useEffect( () =>{
        Notification.requestPermission();


    },[]) // Array vazio significa que a função vai executar apenas uma vez

    useEffect(( )=>{

        Cookie.set('level',String(level));
        Cookie.set('currentExperience',String(currentExperience));
        Cookie.set('challengesCompleted',String(challengesCompleted));

    }, [ level, currentExperience, challengesCompleted])

    function levelUp(){ 
        setLevel(level + 1)
        setIsLevelUpModalOpen(true)
     }

     function closeLevelUpModal(){
        setIsLevelUpModalOpen(false)
     }
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
            closeLevelUpModal,
            completeChallenge,
            resertChallenge,
            levelUp,
            startNewChallenge}}> 
        {children}
        {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}