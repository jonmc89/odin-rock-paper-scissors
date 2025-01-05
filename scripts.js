/* Gets random choice from computer */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else if (computerChoice === 3) {
        computerChoice = "scissors";
    } else {
        computerChoice = "error";
    }
    return computerChoice;
}

/* Gets user choice */
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors?");
    return humanChoice.toLowerCase();
}

/* Empty Variables for scores */
let humanScore = 0;
let computerScore = 0;

/* Play a single round */
function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore += 1;
                console.log("Computer chose paper, You lose!");
            } else if (computerChoice === "rock") {
                console.log("Computer chose rock, it's a draw!");
            } else {
                humanScore += 1;
                console.log("Computer chose scissors, You win!");
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("Computer chose scissors, You lose!");
            } else if (computerChoice === "paper") {
                console.log("Computer chose paper, it's a draw!");
            } else {
                humanScore += 1;
                console.log("Computer chose rock, You win!");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore += 1;
                console.log("Computer chose rock, You lose!");
            } else if (computerChoice === "scissors") {
                console.log("Computer chose scissors, it's a draw!");
            } else {
                humanScore += 1;
                console.log("Computer chose paper, You win!");
            }
            break;
        default:
            console.log("Invalid choice");
            break;
    }
}


const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

scissorsButton.addEventListener('Click', playRound);
paperButton.addEventListener('Click', playRound);
scissorsButton.addEventListener('Click', playRound);



/* Play Game for 5 rounds 
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}
*/

/*
playGame();
*/
