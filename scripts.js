let nextPlayer = 'X'; // current player

// Initialize the game by showing the next player
document.getElementById('next-lbl').innerText = nextPlayer;

// Create the 3x3 board
createGameBoard();

function createGameBoard() {
    for (let i = 1; i <= 9; i++) {
        // create button
        let cell = document.getElementById('c' + i);
        let btn = document.createElement('button');
        btn.innerText = '[ ]';
        btn.id = 'btn' + i;

        // add event listener
        btn.addEventListener('click', takeCell);

        // append button to cell
        cell.appendChild(btn);
    }
}

function takeCell(event) {
    let btn = event.target;

    // replace [ ] with current player's symbol
    btn.innerText = '[' + nextPlayer + ']';
    btn.disabled = true;

    // switch player
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // check if all buttons are disabled
    if (isGameOver()) {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver() {
    let btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) {
            return false;
        }
    }
    return true;
}
