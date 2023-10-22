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
  
        }
      });
    }

    
}