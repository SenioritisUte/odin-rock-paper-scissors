
function game() {

for (let i = 0; i < 5; i++) {

let randomNumber = (Math.floor(Math.random()*3) + 1);

function computerPlay() {
   
    if (randomNumber === 1) return 'Rock';
    if (randomNumber === 2) return 'Paper';
    if (randomNumber === 3) return 'Scissors';
}

function playerPlay () {
    let choice = prompt('Rock, paper, or scissors?');
    let choiceFixed = choice[0].toUpperCase() + choice.substring(1);
    return choiceFixed;
}


console.log(computerPlay());

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Rock') return 'It is a tie.';
    if (playerSelection === 'Rock' && computerSelection === 'Paper') return 'Player loses.';
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') return 'Player wins.';
    if (playerSelection === 'Scissors' && computerSelection === 'Scissors') return 'It is a tie.';
    if (playerSelection === 'Scissors' && computerSelection === 'Rock') return 'Player loses.';
    if (playerSelection === 'Scissors' && computerSelection === 'Paper') return 'Player wins.';
    if (playerSelection === 'Paper' && computerSelection === 'Paper') return 'It is a tie.';
    if (playerSelection === 'Paper' && computerSelection === 'Scissors') return 'Player loses.';
    if (playerSelection === 'Paper' && computerSelection === 'Rock') return 'Player wins.';

}

let playerSelection = playerPlay();
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

let playerWinRound = "Player wins.";
let computerWinRound = "Player loses.";
let tie = "It is a tie.";
let playerWin = "You win! Congratulations!";
let computerWin = "The Computer wins. Better luck next time.";


function scoreBoard(result) {
    if (result === playerWinRound) {
        playerScore++;
    } else if (result === computerWinRound) {
        computerWinRound++;
    } else {
        tie++;
    }

if playerScore === 5) {
    console.log(playerWin);
    return;
}

if computerScore === 5) {
    console.log(computerWin);
    return;
}

}

}


game();


