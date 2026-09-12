function getGameBoardCells() {
    const cells = document.querySelectorAll(".cell");
    const array = [];

    // cells.forEach((cell) => { cell.addEventListener("click", () => { cell.textContent = getMark(); }) });
    cells.forEach((cell) => { array.push(cell); });

    return (array);
}

function gameBoard(cellsList) {
    let currentMark = "X";

    const getCurrentMark = () => currentMark;
    const updateCurrentMark = function () { currentMark = (getCurrentMark() === "X" ? "O" : "X") };
    const drawMark = function () { cellsList.forEach((cell) => { cell.addEventListener("click", () => { cell.textContent = getCurrentMark(); updateCurrentMark(); }) }) };

    return ({cellsList, getCurrentMark, updateCurrentMark, drawMark});
}

const game = gameBoard(getGameBoardCells());

game.drawMark();