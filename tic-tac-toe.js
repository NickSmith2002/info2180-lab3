window.onload = function () {
    // Exercise 1 - Layout Board
    let board = document.getElementById('board'); 
    let squares = board.getElementsByTagName('div');

    for (let i = 0; i < 9; i++) {
        let square = squares[i];
    
        square.classList.add('square');
    }
}