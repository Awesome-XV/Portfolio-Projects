let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, comp, target) => {
    const humanDifference = Math.abs(target - human)
    const compDifference = Math.abs (target - comp)
    if (compDifference >= humanDifference) {
        return true
    } else {
        return false
    }
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer"){
        computerScore++;
    }
}

const validation = num => {
    if (num < 0 || num > 9) {
        alert("Please change your number between 0-9")
    }
}

const advanceRound = () => {
    currentRoundNumber++;
};