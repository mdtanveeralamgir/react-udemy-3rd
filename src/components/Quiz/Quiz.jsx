import {useState} from 'react'
import QUESTIONS from '../../questions.js';

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([])
    const aciveQuestionIndex = userAnswer.length;

    function handleSelectAnswer(answer) {
        setUserAnswer(prev => [...prev, answer])
    }

    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[aciveQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[aciveQuestionIndex].answers.map((answer) => <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>)}
            </ul>
        </div>
    </div>
}