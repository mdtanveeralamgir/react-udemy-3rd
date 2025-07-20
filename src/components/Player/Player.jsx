import {useState} from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        setIsSubmitted(false)
        setEnteredPlayerName(event.target.value);
    }

    function onClick() {
        setIsSubmitted(true);
    }

    return (
        <section id="player">
            <h2>{`Welcome ${isSubmitted ? enteredPlayerName : 'unknown entity'}`}</h2>
            <p>
                <input onChange={handleChange} value={enteredPlayerName} type="text"/>
                <button onClick={onClick}>Set Name</button>
            </p>
        </section>
    );
}
