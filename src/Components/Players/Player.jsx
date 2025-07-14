import {useState} from "react";


export default function Player({initialPlayerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);

    function handleEditingClick() {
        setIsEditing((prevState) => !prevState);
    }

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    if (isEditing)
        playerNameElement =
            <input type="text" name="playerName" required value={playerName} onChange={handlePlayerNameChange}/>;

    return (<li>
                <span className="player">
                    {playerNameElement}
                    <span className="player-symbol">{playerSymbol}</span>
                </span>
        <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}