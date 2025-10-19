// --- Step 0: Globals ---
let nextPlayer = 'X'; // will alternate between 'X' and 'O'

// --- Step 1: Initialize next-lbl to nextPlayer ---
document.getElementById('next-lbl').innerText = nextPlayer;

// Create the board on load
createGameBoard();

// --- Step 2 & 3: Build board and attach click listeners ---
function createGameBoard() {
    // Create 9 buttons labeled "[ ]" and place one in each cell c1..c9
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById('c' + i);
        const btn = document.createElement('button');
        btn.innerText = '[ ]';      // label required by spec
        btn.id = 'btn' + i;

        // Step 3: Add click listener that calls takeCell (pass event)
        btn.addEventListener('click', takeCell);

        cell.appendChild(btn);
    }
}

// --- Step 4 & 6: Handle a move, swap player, update labels, check game over ---
function takeCell(event) {
    const btn = event.target;

    // Fill this cell with current player's symbol inside the brackets
    btn.innerText = '[' + nextPlayer + ']';

    // Button can only be clicked once
    btn.disabled = true;

    // Swap player for next turn and update next-lbl
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // --- Step 6: If game is over, update game-over-lbl ---
    if (isGameOver()) {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

// --- Step 5: Return true when all buttons are disabled ---
function isGameOver() {
    const btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) return false;
    }
    return true;
}

        }
    }
    return true;
}
