import {useState} from "react";



export default function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditingClick() {
        setIsEditing((prevState) => !prevState);
    }

    return (<li>
                <span className="player">
                    {isEditing ? <input type="text" name="playerName" required/> : <span className="player-name">{playerName}</span>}
                    <span className="player-symbol">{playerSymbol}</span>
                </span>
        <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}