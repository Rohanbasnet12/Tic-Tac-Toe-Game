let player1 = 'X';
let player1Turn = true;

let player2 = 'O';

// CREATING AN EMPTY ARRAY FOR USER ATTEMPTS 
const attempt = [];
$('#player').html(player1); // Initialize with player1


$('.box').each(function () {
    $(this).on('click', () => {
        if (!$(this).text()) { // Check if the box is empty
            if (player1Turn === true) { // If player1 Turn
                $(this).text(player1); // Inserting X on the clicked container

                attempt.push(player1);
                player1Turn = false;
                $('#player').html(player2); // Update player indicator to player2
            } else { // If player2 Turn
                $(this).text(player2); // Inserting O on the clicked container

                attempt.push(player2);
                player1Turn = true;
                $('#player').html(player1); // Update player indicator to player1
            }

            console.log(attempt);
            if (attempt.length === 9) {
                console.log('Game over');
                $('#display').html('GAME OVER !');
                $('.restart').css({
                    'display': 'block',
                });
            }
        }
        forXToWin();
        forYToWin();
    })
});


function forXToWin() {
    if (attempt[0] == 'X' && attempt[2] == 'X' && attempt[4] == 'X') {
        $('#display').html(`Player ${player1} Won`);
        $('.restart').css({
            'display': 'block',
        });
    }
}

function forYToWin() {
    if (attempt[0] == 'O' && attempt[2] == 'O' && attempt[4] == 'O') {
        $('#display').html(`Player ${player2} Won`);
        $('.restart').css({
            'display': 'block',
        });
    }
}