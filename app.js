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
           alert(`You make a Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
           return ; 
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

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => 

         cChoice === pChoice
       ? RESULT_DRAW 
       : (cChoice === ROCK && pChoice === PAPER) ||
         (cChoice === PAPER && pChoice === SCISSORS) ||
         (cChoice === SCISSORS && pChoice === ROCK)      // this is an alternative and fairly easy way to
       ? PLAYER_WIN                                      // make a function
       : COMPUTER_WIN;

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

startGameBtn.addEventListener('click', () => {   //this is a call back funciton cause we are not call the function
    if(gameIsRunning){                          // the addeventlistern is doing it
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting soon....',);
    const playerSelection = getPlayerChoice();                // these 3 lines are nothing but function declarations
    const computerChoice = getComputuerCHoice();
    let winnerResult;
    if (playerSelection){
        winnerResult = getWinner(computerChoice, playerSelection);
    } else {
        winnerResult = getWinner(computerChoice );
    }
    let message = `YOU PICKED ${playerSelection || DEFAULT_CHOICE} & COMPUTER PICKED ${computerChoice}, THATS WHY YOU` ;
    if(winnerResult === RESULT_DRAW){
        message = message + ' HAD A DRAW';
    } else if  (winnerResult === PLAYER_WIN) {
        message = message + ' WON';
    } else {
        message = message + ' LOST';
    }
    alert(message);
    gameIsRunning = false;
});

// not realted to the function



// // not related to the game

// const sumUp = (...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };


// console.log(sumUp(1,4,5,6,-34));
// console.log(sumUp(1,4,5,6,-34, 32,32,12,-54));

