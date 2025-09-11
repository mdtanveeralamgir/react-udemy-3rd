import {useState} from "react";


export default function Player({initialPlayerName, playerSymbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);

    function handleEditingClick() {
        setIsEditing((prevState) => !prevState);

        if (isEditing) {
            onChangeName(playerSymbol, playerName);
        }
    }

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    if (isEditing)
        playerNameElement =
            <input type="text" name="playerName" required value={playerName} onChange={handlePlayerNameChange}/>;

    return (<li className={isActive ? "active" : undefined}>
                <span className="player">
                    {playerNameElement}
                    <span className="player-symbol">{playerSymbol}</span>
                </span>
        <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}