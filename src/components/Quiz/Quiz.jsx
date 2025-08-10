import {useState, useCallback, useRef} from 'react'
import QUESTIONS from '../../questions.js';
import quizComplete from '../../assets/quiz-complete.png'
import Question from '../Question/Question.jsx'

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
        return <div id="summary">
            <img src={quizComplete} alt="Quiz Complete"/>
            <h2>Quiz Completed</h2>
        </div>
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