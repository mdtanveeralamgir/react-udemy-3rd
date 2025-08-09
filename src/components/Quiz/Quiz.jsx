import {useState, useCallback} from 'react'
import QUESTIONS from '../../questions.js';
import quizComplete from '../../assets/quiz-complete.png'
import QuestionTimer from "../QuestionTimer/QuestionTimer.jsx";

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
        }, 10000);

    }, [aciveQuestionIndex])

    const handleTimeOut = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

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
            {/*The key will change on every render resulting the QuestionTimer unMount and reMount on every change*/}
            <QuestionTimer key={aciveQuestionIndex} timeout={10000} onTimeout={handleTimeOut}/>
            <h2>{QUESTIONS[aciveQuestionIndex].text}</h2>
            <ul id="answers">
                {suffeledAnswers.map((answer) => {
                    // debugger
                    const isSelected = answer === userAnswer[userAnswer.length - 1];
                    let cssClass = '';
                    // debugger
                    if(answerState === 'answered' && isSelected){
                        cssClass = 'selected';
                    }
                    if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                        cssClass = answerState;
                    }
                    cssClass = answerState === 'answered' ? 'answered' : '';
                    return <li key={answer} className="answer">
                        <button className={cssClass} onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                })}
            </ul>
        </div>
    </div>
}