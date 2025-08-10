import {useState, useCallback, useRef} from 'react'
import QUESTIONS from '../../questions.js';
import quizComplete from '../../assets/quiz-complete.png'
import Question from '../Question/Question.jsx'

export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const [answerState, setAnswerState] = useState('')
    const aciveQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;

    const isQuizFinished = userAnswer.length === QUESTIONS.length;

    //aciveQuestionIndex needs to be added as dependency
    //so everytime aciveQuestionIndex changes the function is recreated
    const handleSelectAnswer = useCallback((answer) => {
        setAnswerState('answered');
        setUserAnswer(prev => [...prev, answer]);
        setTimeout(() => {
            if (answer === QUESTIONS[aciveQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);

    }, [aciveQuestionIndex])

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
            onTimeout={handleTimeOut}
            questionTxt={QUESTIONS[aciveQuestionIndex].text}
            answers={QUESTIONS[aciveQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer}
            selectedAnswer={userAnswer[userAnswer.length - 1]}
            answerState={answerState}
        />
    </div>
}