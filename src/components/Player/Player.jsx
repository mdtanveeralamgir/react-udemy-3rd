import {useState, useRef} from "react";

export default function Player() {
    const playerName = useRef('');
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    //this will not work as when ref changes the dom doesn't gets re-rendered, like useState
    return (
        <section id="player">
            <h2>{`Welcome ${playerName.current ? playerName.current.value : 'unknown entity'}`}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button>Set Name</button>
            </p>
        </section>
    );
}
