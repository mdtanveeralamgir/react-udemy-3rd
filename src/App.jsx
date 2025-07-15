import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import Log from "./Components/Logs/Log.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleGameBoardCellClick(rowIndex, colIndex) {
        setActivePlayer(prevState => prevState === 'X' ? 'O' : 'X');
        setGameTurns(prevState => {
            let currentPlayer = 'X';
            if (prevState.length > 0 && prevState[0].player === 'X') {
                currentPlayer = 'O';
            }
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
                <Player initialPlayerName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'}/>
                <Player initialPlayerName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onGameBoardCellClick={handleGameBoardCellClick} turns={gameTurns}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
