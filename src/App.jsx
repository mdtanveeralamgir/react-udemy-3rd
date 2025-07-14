import Player from "./Components/Players/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
function App() {
    return <main>
        <div id="game-container">
            <ol id="players">
                <Player initialPlayerName="Player 1" playerSymbol="X"/>
                <Player initialPlayerName="Player 2" playerSymbol="O"/>
            </ol>
            <GameBoard/>
        </div>
    </main>
}

export default App
