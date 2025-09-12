import {useState, useRef} from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevState) => prevState - 10);
        }, 10)
    }

    function handleTimeReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (<>
        <ResultModal resetTime={handleTimeReset} ref={dialog} remainingTime={timeRemaining} targetTime={targetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p onClick={timerIsActive ? handleStop : handleStart}>
                <button> {timerIsActive ? 'Stop' : 'Start'} challenge</button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer Inactive'}
            </p>
        </section>
    </>)
}