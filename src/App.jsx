import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import Log from "./Components/Logs/Log.jsx";
import {useState} from "react";
import {WINNING_COMBINATIONS} from "./data/winning-combinations.js";
import GameOver from "./Components/GameOver/GameOver.jsx";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null],];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [playerName, setPlayerName] = useState({
        X: 'Player 1',
        O: 'Player 2'
    });
    const [gameTurns, setGameTurns] = useState([]);
    const currentPlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map(row => [...row])];

    for (const turn of gameTurns) {
        const {square, player} = turn; //array destructuring
        const {row, col} = square; //object destructuring
        gameBoard[row][col] = player;
    }
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstCombination = gameBoard[combination[0].row][combination[0].column];
        const secondCombination = gameBoard[combination[1].row][combination[1].column];
        const thirdCombination = gameBoard[combination[2].row][combination[2].column];

        if (firstCombination && firstCombination === secondCombination && firstCombination === thirdCombination) {
            winner = firstCombination;
            break;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

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
                [playerSymbol]: playerSymbol,
            }
        });
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialPlayerName="Player 1" playerSymbol="X" isActive={currentPlayer === 'X'}/>
                <Player initialPlayerName="Player 2" playerSymbol="O" isActive={currentPlayer === 'O'}/>
            </ol>
            {(winner || hasDraw) && <GameOver onClickRematch={handleRematch} winner={winner}/>}
            <GameBoard gameBoard={gameBoard} onGameBoardCellClick={handleGameBoardCellClick}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
