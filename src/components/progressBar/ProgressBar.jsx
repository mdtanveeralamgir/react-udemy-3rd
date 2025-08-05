import {useEffect, useState} from "react";
import {useContext} from "react";
import {QuizContext} from "../store/QuestionContext.jsx";


export default function ProgressBar({currentQuestion}) {
    const TIMER = 4000;
    const [remainingTimer, setRemainingTimer] = useState(TIMER);
    const {handleQuestionChange} = useContext(QuizContext);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTimer(prev => {
                if (prev <= 10) {
                    clearInterval(interval);
                    setTimeout(() => handleQuestionChange(), 0);
                    return TIMER;
                }
                return prev - 10;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [currentQuestion]);


    return <progress value={remainingTimer} max={TIMER}/>
}