import {useState} from "react";


export default function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditingClick() {
        setIsEditing((prevState) => !prevState);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    if (isEditing)
        playerNameElement = <input type="text" name="playerName" required value={playerName}/>;

    return (<li>
                <span className="player">
                    {playerNameElement}
                    <span className="player-symbol">{playerSymbol}</span>
                </span>
        <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}