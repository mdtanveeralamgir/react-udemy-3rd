import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import Log from "./Components/Logs/Log.jsx";
import {useState} from "react";
import {WINNING_COMBINATIONS} from "./data/winning-combinations.js";

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    // const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);
    const currentPlayer = deriveActivePlayer(gameTurns);

    function handleGameBoardCellClick(rowIndex, colIndex) {
        // setActivePlayer(prevState => prevState === 'X' ? 'O' : 'X');
        setGameTurns(prevState => {
            const currentPlayer = deriveActivePlayer(prevState);
            return [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer}
                //adding another useState: activePlayer is not a good idea because of
                //scheduling the activePlayer might not be the current player
                // {square: {row: rowIndex, col: colIndex}, player: activePlayer}
                , ...prevState];
        });
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialPlayerName="Player 1" playerSymbol="X" isActive={currentPlayer === 'X'}/>
                <Player initialPlayerName="Player 2" playerSymbol="O" isActive={currentPlayer === 'O'}/>
            </ol>
            <GameBoard onGameBoardCellClick={handleGameBoardCellClick} turns={gameTurns}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
