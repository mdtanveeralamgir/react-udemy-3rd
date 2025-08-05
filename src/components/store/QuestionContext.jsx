import {createContext, useState} from "react";
import questions from "../../questions.js";

export const QuizContext = createContext(
    {
        currentQuestion: {},
        handleQuestionChange: () => {
        },
        storeAnswers: [],
        handleAnswer: () => {
        }
    }
)

export default function QuestionContextProvider({children}) {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [selectedOption, setSelectedOption] = useState([]);
    console.log(currentQuestionNumber);

    function onQuestionChange() {
        setCurrentQuestionNumber(prev => {
                if (prev === questions.length - 1) return 0
                return prev + 1
            }
        );
    }

    function insertAnswer(answer) {
        setSelectedOption(prevState => [...prevState, {
            questionID: questions[currentQuestionNumber].id,
            answerID: answer,
        }])
        console.log(selectedOption);
    }

    const ctxValue = {
        currentQuestion: questions[currentQuestionNumber],
        handleQuestionChange: onQuestionChange,
        storeAnswers: [],
        handleAnswer: insertAnswer
    }

    return <QuizContext value={ctxValue}>{children}</QuizContext>
}