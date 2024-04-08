const game = ["Rock","Paper","Scissors"];

// get random value from the array "game"
const getComputerChoice = () => game[Math.floor(Math.random() * game.length)].toUpperCase();

// initialize player and computer score
let playerWin = 0;
let computerWin = 0;

// function playRound takes the user input and checks whether the user wins, loses, or draws --- function playRound start
let playRound = (playerSelection, computerSelection) => {
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
       playerSelection == "PAPER" && computerSelection == "ROCK" ||
       playerSelection == "SCISSORS" && computerSelection == "PAPER")
      {
        playerWin++
        winner.textContent = "You Win the round! You chose " + playerSelection + " and Computer chose " + computerSelection
        scoreBoard.textContent = "Player Score: " + playerWin + "\r Computer Score: " + computerWin;
      }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER" ||
            playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
            playerSelection == "SCISSORS" && computerSelection == "ROCK")
           {
            computerWin++
            winner.textContent = "You Lose the round! Computer chose " + computerSelection + " and you chose " + playerSelection
            scoreBoard.textContent = "Player Score: " + playerWin + "\r Computer Score: " + computerWin;
           }
    else if(playerSelection == computerSelection){
            winner.textContent = "Draw! You both chose " + playerSelection
            scoreBoard.textContent = "Player Score: " + playerWin + "\r Computer Score: " + computerWin;
         }

    // This checks for the game winner based on who reaches the score of 5 first
    if (playerWin === 5){
            playerWin = 0
            computerWin = 0
            winner.textContent = "Player wins the game!"
        }
    else if (computerWin === 5){
            playerWin = 0
            computerWin = 0
            winner.textContent = "Computer wins the game!"
        }
}
// --- function playRound end


// Assign html body tag to variable name "body"
const body = document.querySelector("body")

// Add a single h1 element to html body and assign a title text --- h1 to body start
const titleText = document.createElement("h1")
titleText.textContent = "Let's play ROCK, PAPER, SCISSORS!"
titleText.style.cssText = "text-align:center; padding: 100px;"
body.appendChild(titleText);
// --- h1 to body end

// Display player and computer score --- display score start
const scoreBoard = document.createElement("h2")
scoreBoard.style.cssText = "text-align:center; padding-bottom: 100px;"
scoreBoard.textContent = "Player Score: " + playerWin + "\r Computer Score: " + computerWin;
body.appendChild(scoreBoard)
// --- display score end

// display who wins --- winner start
const winner = document.createElement("h2")
winner.style.cssText = "text-align:center; padding-bottom: 100px;"
winner.textContent = "Click a button to play"
body.appendChild(winner)
// --- winner end

// Add a div with the class name of "rpsBtn" that contains the buttons rockBtn, paperBtn, scissorsBtn --- rpsBtn start
const btnDiv = document.createElement("div")
btnDiv.classList.add("rpsBtn")
btnDiv.style.cssText = "display: flex; flex-wrap: wrap; justify-content: space-evenly; width: 50%; margin: auto"
body.appendChild(btnDiv)

const rockBtn = document.createElement("button")
rockBtn.textContent = "ROCK"
rockBtn.style.cssText = "min-width: 25%; font-size: 30px;"
rockBtn.addEventListener ('click', () => playRound(rockBtn.textContent, getComputerChoice()))
btnDiv.appendChild(rockBtn)

const paperBtn = document.createElement("button")
paperBtn.textContent = "PAPER"
paperBtn.style.cssText = "min-width: 25%; font-size: 30px;"
paperBtn.addEventListener ('click', () => playRound(paperBtn.textContent, getComputerChoice()))
btnDiv.appendChild(paperBtn)

const scissorsBtn = document.createElement("button")
scissorsBtn.textContent = "SCISSORS"
scissorsBtn.style.cssText = "min-width: 25%; font-size: 30px;"
scissorsBtn.addEventListener ('click', () => playRound(scissorsBtn.textContent, getComputerChoice()))
btnDiv.appendChild(scissorsBtn)
// --- rpsBtn end






