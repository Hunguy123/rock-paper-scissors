
//cashing the dumb /thump??!?!?
/* sozusagen hier ist es temporär gespeichert
um es effizienter zumachen und zur genauen bezeichnungen, also festgelegte
vars usw. */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div = document.getElementById("s");
/*
rock_div.addEventListerner('click',function () {
  console.log("hey you clicked on rock!");
})
*/

main();

function main() {

rock_div.addEventListener('click',function functionName() {
  game("r");
});

paper_div.addEventListener('click',function functionName() {
  game("p");
});

scissors_div.addEventListener('click',function functionName() {
  game("s");
});

};

function convertToWord(letter) {
  if (letter ==="r") return "Rock";
  if (letter ==="p") return "Paper";
  return "Scissor";
}

//veränderung des html textes oder überschreibung
function win(userChoise, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}   beats   ${convertToWord(computerChoice)}${smallComputerWord} . You Win!`;

};

function lose(userChoise, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}   loses   ${convertToWord(computerChoice)}${smallComputerWord} . You Lost!`;
  //css bonus
  document.getElementById(userChoise).classList.add('green-glow');

};

function draw(userChoise, computerChoice) {

  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}   equals to   ${convertToWord(computerChoice)}${smallComputerWord} . It´s a Draw!`;

};
//vergleich von Computer und User
function game(userChoise) {
  const computerChoice = getComputerChoice();
  switch (userChoise + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoise,computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoise,computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoise,computerChoice);
        break;
  }
}

/* funktion für den computer um seine wahl von
"rock paper scissors" zu wählen */
function getComputerChoice() {
  const choices = ['r', 'p' , 's'];
  const randomNumber = Math.floor(Math.random() * 3);//Math.floor zum runden der Zahl, Math.random wählt eine zahl zwischen 0-1 dazu noch * 3
  return choices [randomNumber];
};
