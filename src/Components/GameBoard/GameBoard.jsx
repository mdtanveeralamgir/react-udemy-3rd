import {useState} from "react";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null],];

export default function GameBoard({onGameBoardCellClick, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleBoardCellClick(rowIndex, colIndex) {
        const gameBoardCellValue = gameBoard[rowIndex][colIndex];
        if (!gameBoardCellValue) {
            setGameBoard(prevState => {
                //updating array in immutable way so the previous array in memory doesnot get updated before.
                const newGameBoard = [...prevState.map(row => [...row])];
                newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
                return newGameBoard;
            })
        }
        onGameBoardCellClick();
    }


    return (<ol id="game-board">
            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                        <button
                            onClick={() => handleBoardCellClick(rowIndex, colIndex)}>{playerSymbol}
                        </button>
                    </li>))}
                </ol>
            </li>))}
        </ol>)
}