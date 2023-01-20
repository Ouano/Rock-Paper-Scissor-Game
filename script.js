

const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const scissorButton = document.getElementById("scissor");
const player_Score = document.getElementById("player-score");
const comp_Score = document.getElementById("comp-score");
const resultContainer = document.getElementById("result-container");

let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let manWinner = false;


function paper() {
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function rock() {
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function scissor() {
    playerSelection = "scissor";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if(playerScore != 5 & computerScore != 5) {
        if(playerSelection === computerSelection) {
            resultContainer.innerHTML = "Tie Game";
        } else if(computerPlay() == "paper" && playerSelection == "scissor") {
            playerScore += 1;  
            player_Score.innerHTML = playerScore;
            manWinner = true;
            stringAnnounce(playerSelection,computerSelection);
        } else if(computerPlay() === "paper" && playerSelection === "rock" ) {
            computerScore += 1;  
            comp_Score.innerHTML = computerScore;
            manWinner = false;
            stringAnnounce(playerSelection,computerSelection);
        } else if(computerPlay() === "rock" && playerSelection === "paper") {
            playerScore += 1;  
            player_Score.innerHTML = playerScore;
            manWinner = true;
            stringAnnounce(playerSelection,computerSelection);
        } else if(computerPlay() === "rock" && playerSelection === "scissor" ) {
            computerScore += 1;  
            comp_Score.innerHTML = computerScore;
            manWinner = false;
            stringAnnounce(playerSelection,computerSelection);
        } else if(computerPlay() === "scissor" && playerSelection === "paper") {
            computerScore += 1;  
            comp_Score.innerHTML = computerScore;
            manWinner = false;
            stringAnnounce(playerSelection,computerSelection);
        } else if(computerPlay() === "scissor" && playerSelection === "rock") {
            playerScore += 1;  
            player_Score.innerHTML = playerScore;
            manWinner = true;
            stringAnnounce(playerSelection,computerSelection);
        }
    }

    if(playerScore === 5) {
        resultContainer.innerHTML = "Man is still reigns the smartest!";
    } else if (computerScore === 5) {
        resultContainer.innerHTML = "Get a life bro. Go study and work.";
    }
}

function stringAnnounce(playerSelection, computerSelection) {
    if(manWinner == true) {
        resultContainer.innerHTML = "Wat a skwaa, " + playerSelection + " is indeed superior than " + computerSelection;
    } else if (manWinner == false){
        resultContainer.innerHTML = "You loser, "+ computerSelection + " beats " + playerSelection;
    }
}

const playArray = ["paper","rock","scissor"];

function computerPlay() {
    return playArray[Math.floor(Math.random() * playArray.length)];
    
}

paperButton.addEventListener("click", paper);
rockButton.addEventListener("click", rock);
scissorButton.addEventListener("click", scissor);