const newGame = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
$('#begin-game').click(function () {
    newGame.startGame();
    $(this).hide();;
    $('#play-area').css({'opacity': 1 });
});

$(document.documentElement).keydown(function (e) { 
    newGame.handleKeydown(e);
});
