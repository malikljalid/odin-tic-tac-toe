function gameBoard() {
    let cells       = Array(9).fill(" ");

    const show = (function () {
        console.log(" | " + cells[0] + " | " + cells[1] + " | " + cells[2] + " | ");
        console.log(" | " + cells[3] + " | " + cells[4] + " | " + cells[5] + " | ");
        console.log(" | " + cells[6] + " | " + cells[7] + " | " + cells[8] + " | " + "\n\n\n");
    });

    const setCell = function (cellNumber, playerMark) { cells[cellNumber] = playerMark; show(); };
    const getCell = (i) => cells[i];

    const isFull = function () {
        return (cells[0] !== " " && cells[1] !== " " && cells[2] !== " " &&
                cells[3] !== " " && cells[4] !== " " && cells[5] !== " " &&
                cells[6] !== " " && cells[7] !== " " && cells[8] !== " ");
    };

    const playerMarkWon = (playerMark) => {
        return ((getCell(0) === playerMark && getCell(1) === playerMark && getCell(2) === playerMark) ||
                (getCell(3) === playerMark && getCell(4) === playerMark && getCell(5) === playerMark) ||
                (getCell(6) === playerMark && getCell(7) === playerMark && getCell(8) === playerMark) ||
                (getCell(0) === playerMark && getCell(3) === playerMark && getCell(6) === playerMark) ||
                (getCell(1) === playerMark && getCell(4) === playerMark && getCell(7) === playerMark) ||
                (getCell(2) === playerMark && getCell(5) === playerMark && getCell(8) === playerMark) ||
                (getCell(0) === playerMark && getCell(4) === playerMark && getCell(8) === playerMark) ||
                (getCell(2) === playerMark && getCell(4) === playerMark && getCell(6) === playerMark) );
    };

    return ({setCell, getCell, show, isFull, playerMarkWon});
}

function player(markChoice) {
    let mark  = markChoice;
    let score = 0;

    const getMark   = () => mark;
    const getScore  = () => score;
    const increaseScore = () => { score++; };

    return ({getMark, getScore, increaseScore});
}

function gameController() {
    let board   = gameBoard();
    let playerX = player("X");
    let playerO = player("O");
    let turn    = "X";

    const getTurn    = () => turn;
    const updateTurn = () => { turn === "X" ? turn = "O" : turn = "X"; };

    const gamePlay = () => {
        while (!board.isFull())
        {
            board.setCell(Number(prompt( turn + " : Select Position ?")), getTurn());

            if (board.playerMarkWon(getTurn()))
                break ;

            updateTurn();
        }

        if (playerX.getMark() === getTurn())
            playerX.increaseScore();
        else
            playerY.increaseScore();
    };

    return ({getTurn, gamePlay});
}

const game = gameController();

game.gamePlay();