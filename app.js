let player1 = 'X';
let player1Turn = true;

let player2 = 'O';

const attempt = []; // CREATING AN EMPTY ARRAY FOR USER ATTEMPTS 
$('#player').html(player1); // Initialize with player1

// DEFINING DIFFERENT AUDIO FOR IMMERSIVE EXPERIENCE

let xTurnAudio = new Audio('./sounds/blue.mp3');
let yTurnAudio = new Audio('./sounds/green.mp3');
let gameOverAudio = new Audio('./sounds/wrong.mp3');

$('.box').each(function () {
    $(this).on('click', () => {
        if (!$(this).text()) { // Check if the box is empty
            if (player1Turn === true) { // If player1 Turn
                $(this).text(player1); // Inserting X on the clicked container
                xTurnAudio.play();
                attempt.push(player1);
                player1Turn = false;
                $('#player').html(player2); // Update player indicator to player2
            } else { // If player2 Turn
                $(this).text(player2); // Inserting O on the clicked container
                yTurnAudio.play();
                attempt.push(player2);
                player1Turn = true;
                $('#player').html(player1); // Update player indicator to player1
            }

            console.log(attempt);
            if (attempt.length === 9) {
                gameOverAudio.play();
                console.log('Game over');
                $('#display').html('GAME OVER !');
                $('.restart').css({
                    'display': 'block',
                });
            }
        }

    })
});
