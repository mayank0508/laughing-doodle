const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WIN';
const COMPUTER_WIN = 'COMPUTER_WIN';

let gameIsRunning = false;

const getPlayerChoice = () => {
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
    } else if(randomValue <0.67){       // this is a code to get a random value by computer
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice) => {

         cChoice === pChoice
       ? RESULT_DRAW 
       : (cChoice === ROCK && pChoice === PAPER) ||
         (cChoice === PAPER && pChoice === SCISSORS) ||
         (cChoice === SCISSORS && pChoice === ROCK)      // this is an alternative and fairly easy way to
       ? PLAYER_WIN                                      // make a function
       : COMPUTER_WIN; 
}

//     if(cChoice === pChoice){
//         return RESULT_DRAW;
//     } else if ( cChoice === ROCK && pChoice === PAPER 
//              || cChoice === PAPER && pChoice === SCISSORS 
//              || cChoice === SCISSORS && pChoice === ROCK)
//             {
//                 return PLAYER_WIN;
//             } else{
//                 return COMPUTER_WIN;
//             } 
// }

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting soon....',);
    const playerSelection = getPlayerChoice();                // these 3 lines are nothing but function declsrions
    const computerChoice = getComputuerCHoice();
    const winnerResult = getWinner(getComputuerCHoice, getPlayerChoice);
    let message;
    if(winnerResult === RESULT_DRAW){
        message = `YOU PICKED ${playerSelection} & COMPUTER PICKED ${computerChoice}, THATS WHY YOU HAVE  A DRAW`;
    } else if  (winnerResult === PLAYER_WIN) {
        message = `YOU PICKED ${playerSelection} & COMPUTER PICKED ${computerChoice}, THATS WHY YOU WON`;
    } else {
        message = `YOU PICKED ${playerSelection} & COMPUTER PICKED ${computerChoice}, THATS WHY YOU LOST`;
    }
    console.log(message);
    console.log(winnerResult);
});