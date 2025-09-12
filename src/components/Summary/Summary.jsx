import quizComplete from "../../assets/quiz-complete.png";
import QUESTIONS from "../../questions.js";

export default function Summary({userAnswers}) {
    const calculateSkipped = Math.round(userAnswers.filter(answer => answer === null).length / userAnswers.length * 100);
    const calculateCorrect = Math.round(userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length / userAnswers.length * 100);
    const calculateWrong = Math.round(userAnswers.filter((answer, index) => answer !== QUESTIONS[index].answers[0]).length / userAnswers.length * 100);
    return <div id="summary">
        <img src={quizComplete} alt="Quiz Complete"/>
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{calculateSkipped}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{calculateCorrect}%</span>
                <span className="text">correct</span>
            </p>
            <p>
                <span className="number">{calculateWrong}%</span>
                <span className="text">wrong</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if(!answer)
                    cssClass += ' skipped';
                else if(answer === QUESTIONS[index].answers[0])
                    cssClass += ' correct';
                else
                    cssClass += ' wrong';

                return <div key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? 'skipped'}</p>
                </div>
            })}
        </ol>
    </div>
}