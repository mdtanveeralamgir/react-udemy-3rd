import {useState, useRef} from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExperied, setTimerExpired] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000)
    }


    function handleStop() {
        clearTimeout(timer.current);
    }

    return (<>
        <ResultModal ref={dialog} result={timerExperied ? 'LOST' : 'WON'} targetTime={targetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p onClick={timerStarted ? handleStop : handleStart}>
                <button> {timerStarted ? 'Stop' : 'Start'} challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Timer Inactive'}
            </p>
        </section>
    </>)
}