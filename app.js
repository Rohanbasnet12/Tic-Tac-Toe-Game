let player1 = 'X';
let player1Turn = true;
let player2 = 'O';

const attempt = ["", "", "", "", "", "", "", "", ""]; // CREATING AN EMPTY ARRAY FOR USER ATTEMPTS 
$('#player').html(player1); // Initialize with player1

// DEFINING DIFFERENT AUDIO FOR IMMERSIVE EXPERIENCE
let xTurnAudio = new Audio('./sounds/blue.mp3');
let yTurnAudio = new Audio('./sounds/green.mp3');
let gameOverAudio = new Audio('./sounds/wrong.mp3');

$('.box').each(function (index) {
    $(this).on('click', () => {
        if (!attempt[index]) { // Check if the box is empty in the array
            if (player1Turn === true) { // If player1 Turn
                attempt[index] = player1; // Replace array element with X
                $(this).text(player1); // Inserting X on the clicked container
                xTurnAudio.play();
                player1Turn = false;
                $('#player').text(player2); // Update player indicator to player2
            } else { // If player2 Turn
                attempt[index] = player2; // Replace array element with O
                $(this).text(player2); // Inserting O on the clicked container
                yTurnAudio.play();
                player1Turn = true;
                $('#player').text(player1); // Update player indicator to player1
            }

            console.log(attempt); // Check the modified array
            checkWinner(); // Check for a winner after each move
            if (attempt.every(value => value !== "")) {
                // Code for handling when the maximum number of attempts is reached
                gameOverAudio.play();
                $('#display').html('Game Over');
                $('.restart').css({
                    'display': 'block',
                });
            }
        }
    });
});

// FUNCTION TO CHECK FOR THE WINNER
function checkWinner() {
    // WINNING CONDITION:
    const winningCondition = [
        [0, 1, 2], // FOR FIRST ROW
        [3, 4, 5], // FOR SECOND ROW
        [6, 7, 8], // FOR THIRD ROW
        [0, 3, 6], // FOR FIRST COLUMN
        [1, 4, 7], // FOR SECOND COLUMN
        [2, 5, 8], // FOR THIRD COLUMN
        [0, 4, 8], // FOR FIRST DIAGONAL
        [2, 4, 6], // FOR SECOND DIAGONAL
    ];

    // Iterate through winning conditions
    for (let i = 0; i < winningCondition.length; i++) {
        const [a, b, c] = winningCondition[i];

        // Check if all three positions have the same player's mark
        if (attempt[a] !== "" && attempt[a] === attempt[b] && attempt[a] === attempt[c]) {

            gameOverAudio.play();
            $('#display').html(`Player ${attempt[a]} won!`);
            $('.restart').css({
                'display': 'block',
            });

            return;
        }
    }
}
