import {useState, useEffect} from "react";

export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        console.log("setting timeout")
        const timeOutEvent = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timeOutEvent);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("setting interval")
        const intervalEvent = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);
        return () => clearInterval(intervalEvent);
    }, [])


    return <progress id="question-time" max={timeout} value={remainingTime}/>
}