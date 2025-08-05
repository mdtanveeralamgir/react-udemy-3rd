import ProgressBar from "../progressBar/ProgressBar.jsx";
import {useContext} from "react";
import {QuizContext} from "../store/QuestionContext.jsx";

export default function Question() {
    const {currentQuestion, handleAnswer} = useContext(QuizContext);
    return <>
        <ProgressBar currentQuestion={currentQuestion}/>
        <p>{currentQuestion.text}</p>
        <ul>
            {currentQuestion.answers.map((answer, index) =>
                <li key={index}>
                    <button onClick={() => handleAnswer(index)}>
                    {answer}
                    </button>
                </li>)}
        </ul>
    </>
}