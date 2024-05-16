function playGame() {
    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;
    let round;

    for (round = 1; round <= 3; round++) {
        // Player's choice
        let playerChoice = prompt(`Round ${round}: Enter your choice: rock, paper, or scissors`).toLowerCase();
        if (!choices.includes(playerChoice)) {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            round--;
            continue;
        }

        // Computer's choice
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determine the winner
        if (playerChoice === computerChoice) {
            alert("It's a tie!");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            alert("You win this round!");
            playerScore++;
        } else {
            alert("Computer wins this round!");
            computerScore++;
        }
    }

    // Determine the winner of the game
    let winner;
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (computerScore > playerScore) {
        winner = "Computer";
    } else {
        winner = "It's a tie!";
    }

    alert(`Final Score: Player ${playerScore} - ${computerScore} Computer\n${winner} wins the game!`);
}

playGame();
