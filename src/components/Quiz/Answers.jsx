import QUESTIONS from "../../questions.js";
import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const suffeledAnswers = useRef();

    if (!suffeledAnswers.current) {
        suffeledAnswers.current = [...answers];
        suffeledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return <ul id="answers">
        {suffeledAnswers.current.map((answer) => {
            // debugger
            const isSelected = answer === selectedAnswer;
            let cssClass = '';
            // debugger
            if (answerState === 'answered' && isSelected) {
                cssClass = 'selected';
            }
            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                cssClass = answerState;
            }
            return <li key={answer} className="answer">
                <button className={cssClass} onClick={() => onSelect(answer)}>{answer}</button>
            </li>
        })}
    </ul>
}