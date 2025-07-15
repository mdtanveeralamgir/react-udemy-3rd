const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null],];

export default function GameBoard({onGameBoardCellClick, turns}) {

    //we are not managing state here instead using state from different component
    //it's called deriving state
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn; //array destructuring
        const {row, col} = square; //object destructuring
        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function handleBoardCellClick(rowIndex, colIndex) {
    //     const gameBoardCellValue = gameBoard[rowIndex][colIndex];
    //     if (!gameBoardCellValue) {
    //         setGameBoard(prevState => {
    //             //updating array in immutable way so the previous array in memory doesnot get updated before.
    //             const newGameBoard = [...prevState.map(row => [...row])];
    //             newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             return newGameBoard;
    //         })
    //     }
    //     onGameBoardCellClick();
    // }


    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                    <button onClick={()=>onGameBoardCellClick(rowIndex, colIndex)}>
                        {playerSymbol}
                    </button>
                </li>))}
            </ol>
        </li>))}
    </ol>)
}