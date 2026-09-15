function gameBoard() {
    let cells       = Array(9).fill("");

    const showBoard = (function () {
        console.log(" | " + cells[0] + " | " + cells[1] + " | " + cells[2] + " | ");
        console.log(" | " + cells[3] + " | " + cells[4] + " | " + cells[5] + " | ");
        console.log(" | " + cells[6] + " | " + cells[7] + " | " + cells[8] + " | ");
    })();

    return ({cells, showBoard});
}

function player() {
    let mark  = "";
    let score = 0;

    const getMark   = () => mark;
    const getScore  = () => score;
    const setMark   = (choice) => { mark = choice; }
    const increaseScore = () => { score++; };
}

const game = gameBoard();


