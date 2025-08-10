import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../../questions.js";
import Answers from "../Quiz/Answers.jsx";

export default function Question({onTimeout, questionTxt, answers, onSelectAnswer, selectedAnswer, answerState}) {
    {/*The key will change on every render resulting the QuestionTimer unMount and reMount on every change*/
    }
    return <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onTimeout}/>
        <h2>{questionTxt}</h2>
        <Answers
            answers={answers}
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            onSelect={onSelectAnswer}
        />
    </div>
}