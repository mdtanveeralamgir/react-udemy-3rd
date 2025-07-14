import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleGameBoardCellClick() {
        setActivePlayer(prevState => prevState === 'X' ? 'O' : 'X');
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialPlayerName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'}/>
                <Player initialPlayerName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onGameBoardCellClick={handleGameBoardCellClick} activePlayerSymbol={activePlayer}/>
        </div>
    </main>
}

export default App
