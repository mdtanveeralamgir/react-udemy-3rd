import {useState, useCallback, useRef} from 'react'
import QUESTIONS from '../../questions.js';
import Question from '../Question/Question.jsx'
import Summary from "../Summary/Summary.jsx";

export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])

    const aciveQuestionIndex = userAnswer.length;

    const isQuizFinished = userAnswer.length === QUESTIONS.length;

    //aciveQuestionIndex needs to be added as dependency
    //so everytime aciveQuestionIndex changes the function is recreated
    const handleSelectAnswer = useCallback((answer) => {
        setUserAnswer(prev => [...prev, answer]);

    }, [])

    const handleTimeOut = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (isQuizFinished) {
        return <Summary userAnswers={userAnswer}/>
    }

    return <div id="quiz">
        <Question
            key={aciveQuestionIndex}
            index={aciveQuestionIndex}
            onTimeout={handleTimeOut}
            onSelectAnswer={handleSelectAnswer}
        />
    </div>
}