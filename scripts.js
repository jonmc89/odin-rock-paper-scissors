/* UI Elements */
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const humanScoreBox = document.querySelector('.human_score_box');
const roundCountBox = document.querySelector('.round_count_box');
const computerScoreBox = document.querySelector('.computer_score_box');
const roundMessageBox = document.querySelector('.round_message');
const userChoiceImageBox = document.querySelector('.user_choice_image');
const computerChoiceImageBox = document.querySelector('.choice_img_c');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let round_message = "";
let user_choice_image = "";
let computer_choice_image = "";

humanScoreBox.innerHTML = humanScore;
computerScoreBox.innerHTML = computerScore;
roundCountBox.innerHTML = roundCount;
roundMessageBox.innerHTML = round_message;

/* Gets random choice from computer */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

/* Play a single round */
function playRound(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.innerHTML.toLowerCase();
    
    switch(humanChoice) {
        case "rock":
            user_choice_image = '✊';
            if (computerChoice === "paper") {
                computerScore += 1;
                round_message = "Computer chose paper, You lose!";
                computer_choice_image = '✋';
            } else if (computerChoice === "rock") {
                round_message = "Computer chose rock, it's a draw!";
                computer_choice_image = '✊';
            } else {
                humanScore += 1;
                round_message = "Computer chose scissors, You win!";
                computer_choice_image = '✌️';
            }
            break;
        case "paper":
            user_choice_image = '✋';
            if (computerChoice === "scissors") {
                computerScore += 1;
                round_message = "Computer chose scissors, You lose!";
                computer_choice_image = '✌️';
            } else if (computerChoice === "paper") {
                round_message = "Computer chose paper, it's a draw!";
                computer_choice_image = '✋';
            } else {
                humanScore += 1;
                round_message = "Computer chose rock, You win!";
                computer_choice_image = '✊';
            }
            break;
        case "scissors":
            user_choice_image = '✌️';
            if (computerChoice === "rock") {
                computerScore += 1;
                round_message = "Computer chose rock, You lose!";
                computer_choice_image = '✊';
            } else if (computerChoice === "scissors") {
                round_message = "Computer chose scissors, it's a draw!";
                computer_choice_image = '✌️';
            } else {
                humanScore += 1;
                round_message = "Computer chose paper, You win!";
                computer_choice_image = '✋';
            }
            break;
        default:
            console.log("Invalid choice");
            return; // Early exit if invalid choice
    }

    roundCount += 1;
    humanScoreBox.innerHTML = humanScore;
    computerScoreBox.innerHTML = computerScore;
    roundCountBox.innerHTML = roundCount;
    roundMessageBox.innerHTML = round_message;
    userChoiceImageBox.innerHTML = user_choice_image;
    computerChoiceImageBox.innerHTML = computer_choice_image;
}
