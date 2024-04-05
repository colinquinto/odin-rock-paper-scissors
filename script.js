let game = ["Rock","Paper","Scissors"];

let =  getComputerChoice = () => game[Math.floor(Math.random() * game.length)]

const player = "paper";

let playRound = (playerSelection, computerSelection) => "You Lose! " + playerSelection + " beats " + computerSelection;

console.log(playRound(player.toUpperCase(), getComputerChoice().toUpperCase()));