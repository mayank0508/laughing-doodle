const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}??`, '').toUpperCase();
    if(
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
        ){
           alert(`You make a Invaldi choice! We chose ${DEFAULT_CHOICE} for you`);
           return DEFAULT_CHOICE; 
         }
         return selection;
};

startGameBtn.addEventListener('click', function (){
    console.log('Game is starting soon....',);
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});