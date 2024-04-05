const game = ["Rock","Paper","Scissors"];

const getComputerChoice = () => game[Math.floor(Math.random() * game.length)].toUpperCase();

let playerWin = 0;
let computerWin = 0;

let playRound = (playerSelection, computerSelection) => {
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        playerWin++
        alert("You Win! You chose " + playerSelection + " and Computer chose " + computerSelection + "\r Player Score: " + playerWin + "\r Computer Score: " + computerWin)
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        computerWin++
        alert( "You Lose! Computer chose " + computerSelection + " and you chose " + playerSelection + "\r Player Score: " + playerWin + "\r Computer Score: " + computerWin)
    }
    else if (playerSelection == computerSelection){
        alert("Draw! You both chose " + playerSelection + "\r Player Score: " + playerWin + "\r Computer Score: " + computerWin)
    }
    else {
        alert("Invalid selection. Please input Rock, Paper, or Scissors only.")
    }
}

const playGame = () => {

    const playerPrompt = prompt("First to reach a score of 5 wins! \rRock, Paper, or Scissors?: ").toUpperCase();
    console.log(playRound(playerPrompt, getComputerChoice()))

}

while (playerWin < 5 && computerWin < 5){
    playGame()
}

if (playerWin == 5) {
    alert("Player wins!")
}
else {
    alert("Computer wins!")
}




