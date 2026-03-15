let cells = document.querySelectorAll('.play_area div');
let title = document.querySelector('.title_kn');

let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

function handleClick(event) {
    let cell = event.target;
    let index = Array.from(cells).indexOf(cell);
    if (board[index] !== '' || !gameActive) {
        return;
    }
    
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
    if (checkWin()) {
        title.textContent = `Победил ${currentPlayer}!`;
        gameActive = false;
        return;
    }
    
    if (board.every(cell => cell !== '')) {
        title.textContent = 'Ничья!';
        gameActive = false;
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    title.textContent = `Ходит: ${currentPlayer}`;
}

function checkWin() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]     
    ];
    
    return winPatterns.some(pattern => {
        let [a, b, c] = pattern;
        return board[a] !== '' && 
               board[a] === board[b] && 
               board[b] === board[c];
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

title.textContent = 'Ходит: X';