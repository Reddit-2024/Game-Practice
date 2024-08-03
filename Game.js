// Select DOM elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('#buttons button');

// Variables to store choices and result
let userChoice;
let computerChoice;
let result;

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id; // Get the user's choice
        userChoiceDisplay.innerHTML = userChoice; // Display the user's choice
        generateComputerChoice(); // Generate computer's choice
        getResult(); // Determine and display the result
    });
});

// Function to generate computer's choice
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    computerChoiceDisplay.innerHTML = computerChoice; // Display the computer's choice
}

// Function to determine and display the result
function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
    } else if (
        (computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result; // Display the result
}
