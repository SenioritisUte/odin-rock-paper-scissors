function playRound() {

let getUserChoice = userInput => {
    let userChoice = prompt("Please enter Rock, Paper, or Scissors");
    userChoice = userChoice.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {

    }
    
}



let getComputerChoice = cpuInput => {
    let computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}



let userChoice = getUserChoice();
let computerChoice = getComputerChoice();


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It is a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer wins.";
    } else {
        return "Player wins!";
    }
}

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return "Player wins!";
        } else {
            return "Computer wins.";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Computer wins.";
        } else {
            return "Player wins!";
        }
    }

}


determineWinner(userChoice, computerChoice);
console.log(determineWinner(userChoice, computerChoice));

}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

game();