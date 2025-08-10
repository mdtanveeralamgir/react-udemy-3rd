import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "../Quiz/Answers.jsx";
import {useState} from "react";
import QUESTIONS from "../../questions.js";

export default function Question({index, onTimeout, onSelectAnswer}) {
    {/*The key will change on every render resulting the QuestionTimer unMount and reMount on every change*/
    }
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectedeAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
        }, 1000);

        setTimeout(() => {
            onSelectAnswer(answer)
        }, 2000)
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }
    return <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onTimeout}/>
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
            answers={QUESTIONS[index].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectedeAnswer}
        />
    </div>
}