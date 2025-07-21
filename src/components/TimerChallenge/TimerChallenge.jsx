import {useState} from "react";

export default function TimerChallenge({title, targetTime}) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExperied, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExperied && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p onClick={handleStart}>
                <button> {timerStarted ? 'Stop' : 'Start'} challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Timer Inactive'}
            </p>
        </section>
    )
}