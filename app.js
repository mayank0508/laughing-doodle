const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;

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

const getComputuerCHoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if(randomValue <0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
}

startGameBtn.addEventListener('click', function (){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting soon....',);
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputuerCHoice();
    console.log(playerSelection);
});