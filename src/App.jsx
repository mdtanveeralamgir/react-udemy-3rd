import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import Log from "./Components/Logs/Log.jsx";
import {useState} from "react";
import GameOver from "./Components/GameOver/GameOver.jsx";
import {deriveActivePlayer, deriveWinner, deriveGameBoard} from "./Functions/App.js";
import {INITIAL_GAME_BOARD, PLAYERS} from "./Variables/App.js";

function App() {
    const [playerName, setPlayerName] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    const currentPlayer = deriveActivePlayer(gameTurns);
    const hasDraw = gameTurns.length === 9 && !winner;
    const gameBoard = deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);

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

    function handleRematch() {
        setGameTurns([]);
    }

    /*
     In order to show player name in game over message we could move the player name state in app component
     but doing so the whole app component will re-render as user type name of the player
     since playerName useState is tied with the input.
     this is not good practice.
    */

    function handlePlayerNameChange(playerSymbol, playerName) {
        setPlayerName((prevState) => {
            return {
                ...prevState,
                [playerSymbol]: playerName,
            }
        });
    }

    const winner = deriveWinner(gameBoard, playerName);
    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player onChangeName={handlePlayerNameChange} initialPlayerName="Player 1" playerSymbol={PLAYERS.X}
                        isActive={currentPlayer === 'X'}/>
                <Player onChangeName={handlePlayerNameChange} initialPlayerName="Player 2" playerSymbol={PLAYERS.O}
                        isActive={currentPlayer === 'O'}/>
            </ol>
            {(winner || hasDraw) && <GameOver playerName={playerName} onClickRematch={handleRematch} winner={winner}/>}
            <GameBoard gameBoard={gameBoard} onGameBoardCellClick={handleGameBoardCellClick}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
