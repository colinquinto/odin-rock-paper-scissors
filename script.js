const game = ["Rock","Paper","Scissors"];

const getComputerChoice = () => game[Math.floor(Math.random() * game.length)].toUpperCase();

const playerPrompt = prompt("Rock, Paper, or Scissors?: ").toUpperCase();

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection == computerSelection){
        return "Draw! You both chose " + playerSelection;
    }
    else {
        return "Invalid selection. Please input Rock, Paper, or Scissors only.";
    }
}

console.log(playRound(playerPrompt, getComputerChoice()));