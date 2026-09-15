function gameBoard() {
    let cells       = Array(9).fill(" ");

    const showBoard = (function () {
        console.log(" | " + cells[0] + " | " + cells[1] + " | " + cells[2] + " | ");
        console.log(" | " + cells[3] + " | " + cells[4] + " | " + cells[5] + " | ");
        console.log(" | " + cells[6] + " | " + cells[7] + " | " + cells[8] + " | " + "\n\n\n");
    });

    const setCell = function (cellNumber, playerMark) { cells[cellNumber] = playerMark; showBoard(); };

    return ({setCell, showBoard});
}

function player(markChoice) {
    let mark  = markChoice;
    let score = 0;

    const getMark   = () => mark;
    const getScore  = () => score;
    const increaseScore = () => { score++; };

    return ({getMark, getScore, increaseScore});
}

const game = gameBoard();

const playerX = player("X");
const playerO = player("O");

game.setCell(0, "X");
game.setCell(5, "O");
