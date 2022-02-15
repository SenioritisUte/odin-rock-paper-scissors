let firstChoice = prompt('Rock, paper, or scissors?');
let firstChoiceFixed = firstChoice[0].toUpperCase() + firstChoice.substring(1);


let randomNumber = (Math.floor(Math.random()*3) + 1);

function computerPlay() {
   
    if (randomNumber === 1) return 'Rock';
    if (randomNumber === 2) return 'Paper';
    if (randomNumber === 3) return 'Scissors';
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {

    
    if (playerSelection === 'Rock' && computerSelection === 'Rock') return 'It is a tie. Try again!';
    if (playerSelection === 'Rock' && computerSelection === 'Paper') return 'You lose! Paper beats rock.';
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') return 'You win! Rock beats scissors!';
    if (playerSelection === 'Scissors' && computerSelection === 'Scissors') return 'It is a tie. Try again!';
    if (playerSelection === 'Scissors' && computerSelection === 'Rock') return 'You lose! Rock beats Scissors.';
    if (playerSelection === 'Scissors' && computerSelection === 'Paper') return 'You win! Scissors beats paper!';
    if (playerSelection === 'Paper' && computerSelection === 'Paper') return 'It is a tie. Try again!';
    if (playerSelection === 'Paper' && computerSelection === 'Scissors') return 'You lose! Scissors beats paper.';
    if (playerSelection === 'Paper' && computerSelection === 'Rock') return 'You win! Paper beats rock!';

}


let playerSelection = firstChoiceFixed;
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));




function game() {
    for (let i = 0; i < 5; i++) {
    
    playRound();

    }
}

