//Visae vems tur det är
let currentPlayer = "x";

//visar spelets status 
let gameStatus = "Game On";

//Alla elementen
const boxes = document.getElementsByClassName("box");

//loopar genom elementen
for (let i = 0; i < boxes.length; i++) {

  //lägger till händelselyssnare i varje ruta;
  boxes[i].addEventListener("click", function() {

    //kontrollerar om rutan har ett X eller ett O i sig och kontrollerar även om spelet fortfarande är på
    if (boxes[i].innerHTML.trim() == "" && gameStatus == "Game On") {

      //lägger till X eller O för det aktuella spelet i den valda rutan
      boxes[i].innerHTML = currentPlayer;

      //ändrar spelarens tur om det är X eller O
      currentPlayer = currentPlayer == "x" ? "o" : "x";

      //ändrar spelarens vändetikett ovanpå spelet
      document.getElementById(
        "player"
      ).innerHTML = currentPlayer.toUpperCase();

      //kontrollerar 3 matchande X eller O's
      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 1, 2);
      } else if (
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[3].innerHTML.trim() != ""
      ) {
        showWinner(3, 4, 5);
      } else if (
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[6].innerHTML.trim() != ""
      ) {
        showWinner(6, 7, 8);
      } else if (
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[6].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 3, 6);
      } else if (
        boxes[1].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML &&
        boxes[1].innerHTML.trim() != ""
      ) {
        showWinner(1, 4, 7);
      } else if (
        boxes[2].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[8].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 5, 8);
      } else if (
        boxes[0].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 4, 8);
      } else if (
        boxes[2].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 4, 6);
      }
    }
  });
}

//Startar om spelet
document.getElementById("reset").addEventListener("click", function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#dee9ec";
    boxes[i].style.color = "black";
  }
  currentPlayer = "x";
  document.getElementById("message").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  gameStatus = "Game On";
});

//Visar vinnaren om det är X eller O
function showWinner(x, y, z) {
  boxes[x].style.background = "#0d8b70";
  boxes[x].style.color = "white";
  boxes[y].style.background = "#0d8b70";
  boxes[y].style.color = "white";
  boxes[z].style.background = "#0d8b70";
  boxes[z].style.color = "white";
  document.getElementById("winner").innerHTML =
    currentPlayer == "x" ? "O" : "X";
  document.getElementById("message").style.display = "block";
  gameStatus = "Game Over";
}