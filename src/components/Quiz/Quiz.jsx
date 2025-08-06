import {useState} from 'react'
import QUESTIONS from '../../questions.js';
import quizComplete from '../../assets/quiz-complete.png'
import QuestionTimer from "../QuestionTimer/QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([])
    const aciveQuestionIndex = userAnswer.length;

    const isQuizFinished = userAnswer.length === QUESTIONS.length;

    function handleSelectAnswer(answer) {
        setUserAnswer(prev => [...prev, answer])
    }

    function handleTimeOut() {
        handleSelectAnswer(undefined);
    }

    if (isQuizFinished) {
        return <div id="summary">
            <img src={quizComplete} alt="Quiz Complete"/>
            <h2>Quiz Completed</h2>
        </div>
    }

    const suffeledAnswers = [...QUESTIONS[aciveQuestionIndex].answers];
    suffeledAnswers.sort(() => Math.random() - 0.5);

    return <div id="quiz">
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={handleTimeOut}/>
            <h2>{QUESTIONS[aciveQuestionIndex].text}</h2>
            <ul id="answers">
                {suffeledAnswers.map((answer) => <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>)}
            </ul>
        </div>
    </div>
}