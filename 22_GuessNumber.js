// write a js program to generate a random number and store it in a varable. the program then takes an input from the user to tell them whether the guess was correct, greater or than than the original number
// 100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 to 100.
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let numberOfGuesses = 0; // Initialize the number of guesses to 0

while (true) {
    let guess = Number.parseInt(prompt("Guess a number generated between 1 and 100:")); // Prompt user for input
    numberOfGuesses++; // Increment the number of guesses

    if (guess === randomNumber) { // Check if guess is correct
        console.log("Congratulations! You guessed the correct number.");
        break; // Exit loop if guess is correct

    } else if (guess < randomNumber) {
        console.log("Your guess is less than random number generated. So enter greater number");
    } else {
        console.log("Your guess is greater than the random number generated. So enter smaller number");
    }
}

let score = numberOfGuesses; // Calculate score based on the number of guesses
console.log("You succeed in " + score + " guesses")  ;

