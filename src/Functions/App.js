import {WINNING_COMBINATIONS} from "../data/winning-combinations.js";

export function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

export function deriveWinner(gameBoard, playerName) {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstCombination = gameBoard[combination[0].row][combination[0].column];
        const secondCombination = gameBoard[combination[1].row][combination[1].column];
        const thirdCombination = gameBoard[combination[2].row][combination[2].column];

        if (firstCombination && firstCombination === secondCombination && firstCombination === thirdCombination) {
            winner = playerName[firstCombination];
            break;
        }
    }

    return winner;
}

export function deriveGameBoard(initialGameBoard, gameTurns) {
    let gameBoard = [...initialGameBoard.map(row => [...row])];

    for (const turn of gameTurns) {
        const {square, player} = turn; //array destructuring
        const {row, col} = square; //object destructuring
        gameBoard[row][col] = player;
    }

    return gameBoard;
}
