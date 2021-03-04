const startGameBtn = document.getElementById('start-game-btn');

function startGame() {            // this is a declaration
    console.log('Game is starting soon....')
}

// const start = function startGame() {            // this is a expression
//     console.log('Game is starting soon....')
//     }


// const greeting = {
//     name: 'mayank',
//     greet: function greet(){
//         console.log('Hey, Mate!')
//     }
// };

// greeting.greet();

//console.dir(startGame);

startGameBtn.addEventListener('click', startGame);