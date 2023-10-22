window.onload = function () {
    // Exercise 1 - Layout Board
    let board = document.getElementById('board'); 
    let squares = board.getElementsByTagName('div');
    let statusbox = document.getElementById('status'); 
    let boardState = ["", "", "", "", "", "", "", "", ""]; 
    let playerX = true; 
    let btn = document.querySelector('.btn'); 
    let winner = false;
  
    for (let i = 0; i < 9; i++) {
      let square = squares[i];
  
      square.classList.add('square');

    //Exercise 3-  Hover Feature is implemented
    square.addEventListener("mouseover", function(){
        square.classList.add("hover");
    });

    square.addEventListener('mouseleave', function(){
        square.classList.remove("hover");
    });
    
    //Exercise 2- Add an X or O to square when clicked
      square.addEventListener('click', function () {
        if (!boardState[i] && !winner) {
          if (playerX) {
            square.textContent = 'X';
            square.classList.add('X');
            boardState[i] = 'X';
          } else {
            square.textContent = 'O';
            square.classList.add('O');
            boardState[i] = 'O';
          }
  
          playerX = !playerX; // Switch players after each move

          checkWin(boardState);
  
        }
      });
    }
    //Exercise 5 - Restart the Game (Board is reset and the game returns to its initial state)
    btn.addEventListener('click', function () {
        for (let i = 0; i < 9; i++) {
          squares[i].textContent = '';
          squares[i].classList.remove('X', 'O');
          boardState[i] = '';
        }
    
        playerX = true;
        statusbox.textContent = 'Move your mouse over a square and click to play an X or an O.';
        winner = false;
      });

    // Exercise 4- Check Who Wins
    function checkWin() {
        /* Tic Tac Toe winCombinations
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6],
  */
        if (boardState[0] === boardState[1] && boardState[0] === boardState[2]) {
          if (boardState[0]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[0]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[0];
          }
        } else if (boardState[3] === boardState[4] && boardState[3] === boardState[5]) {
          if (boardState[3]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[3]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[3];
          }
        } else if (boardState[6] === boardState[7] && boardState[6] === boardState[8]) {
          if (boardState[6]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[6]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[6];
          }
        } else if (boardState[0] === boardState[3] && boardState[0] === boardState[6]) {
          if (boardState[0]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[0]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[0];
          }
        } else if (boardState[1] === boardState[4] && boardState[1] === boardState[7]) {
          if (boardState[1]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[1]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[1];
          }
        } else if (boardState[2] === boardState[5] && boardState[2] === boardState[8]) {
          if (boardState[2]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[2]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[2];
          }
        } else if (boardState[0] === boardState[4] && boardState[0] === boardState[8]) {
          if (boardState[0]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[0]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[0];
          }
        } else if (boardState[2] === boardState[4] && boardState[2] === boardState[6]) {
          if (boardState[2]) {
            winner = true;
            statusbox.textContent = `Congratulations! ${boardState[2]} is the Winner!`;
            statusbox.classList.add('you-won');
            return boardState[2];
          }
        } else if (!boardState.includes("") && !winner) {
          statusbox.textContent = "It's a draw!";
        }
      }

    
}