import {useState, useRef} from "react";

//let timer;
/*
* using this the stop button with work, but if we start 2 different timeChallenge components
* then we will not be able to stop any of them. Because the timer variable will be replaced by the pointer of 2nd
* started component.
* */

export default function TimerChallenge({title, targetTime}) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExperied, setTimerExpired] = useState(false);
    /*
    * now this timer ref will be tied to each component
    * each instance of this component will have it's own timer variable that points to
    * it's own setTimeout pointer
    * */
    const timer = useRef();
    /*
    * with this solution, the timer cannot be stopped once it's started.
    *  because when we click the stop button the timerChallenge component
    * gets recreated and the timer variable that holds the pointer of setTimeout
    * gets re-assigned to a new pointer of a new setTimeout
    * */

    //let timer;
    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
    }


    function handleStop() {
        clearTimeout(timer.current);
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