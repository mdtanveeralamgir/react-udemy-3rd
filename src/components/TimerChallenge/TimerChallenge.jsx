import {useState} from "react";

export default function TimerChallenge({title, targetTime}) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExperied, setTimerExpired] = useState(false);

    /*
    * with this solution, the timer cannot be stopped once it's started.
    *  because when we click the stop button the timerChallenge component
    * gets recreated and the timer variable that holds the pointer of setTimeout
    * gets re-assigned to a new pointer of a new setTimeout
    * */
    let timer;

    function handleStart() {
        timer = setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
    }


    function handleStop() {
        clearTimeout(timer);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExperied && <p>You lost!</p>}
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
    )
}