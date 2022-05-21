//declare text area variables
const statusBar = document.querySelector('#statusMsg');
const selection = document.querySelectorAll('.throw');
const choice = document.querySelectorAll(`.throw[data-select=throw]`);
const playerScoreboard = document.getElementById('pWinCount');
const pcScoreboard = document.getElementById('cWinCount');
let round = 1;
let choiceMade = new Boolean();
let playerScore = 0;
let pcScore = 0;



function addTransition(e) {

    if (choiceMade != true) {
        this.classList.add('playing');
        e.target.addEventListener('click', makeChoice);
    } else {
        return;
    }
}

function removeTransition(e) {
    this.classList.remove('playing');
    e.target.removeEventListener('click', makeChoice);
}

function makeChoice(e) {
    this.classList.remove('playing');
    this.classList.add('played');
    choiceMade = true;
    let yourPlay = this.dataset.type;
    console.log(yourPlay);
    playRound(yourPlay,this);
}

function playRound(playerWrite,playedSec){
    setTimeout(function(){
    let pcAnswer = computerPlay();
    let pcWrite = stringifyAns(pcAnswer);
    let winner = decideWinner(playerWrite, pcWrite);
    if(winner == 0){winnerStringify = "neither. It's a tie"}
    if(winner == 1){winnerStringify = "the PC"}
    if(winner == 2){winnerStringify = "the Player"}
    let pcShow = document.getElementById('computer').querySelector(`.throw[data-type="${pcWrite}"]`);
    pcShow.classList.add('played');
    let $result = 'The PC played ' + pcWrite + '. You played ' + playerWrite + '. So the winner is ' + winnerStringify + '.';
    statusBar.textContent = $result;
    setTimeout(function(){
        round = round + 1;
        playedSec.classList.remove('played');
        pcShow.classList.remove('played');
        statusBar.textContent = 'Ready for round ' + round + '? Make a selection.';
        choiceMade = false;
        calcScore(winner);
        return;
    },2200);
    },600);
}

function calcScore(win){
    let gameEnd = new String();
    console.log(win);
    if (win == 0){return;}
    if (win == 1){
        pcScore = pcScore + 1;
        pcScoreboard.textContent = pcScore;
        if(pcScore > 4){
            gameEnd = "The PC Wins!!"
            endGame(gameEnd);
            return;
        } else {
        return;
        }
    } else {
        playerScore = playerScore + 1;
        playerScoreboard.textContent = playerScore;
        if(playerScore > 4){
            gameEnd = "The Player Wins!!"
            endGame(gameEnd);
            return;
        } else {
        return;
        }
    }
}

function endGame(finalWinner){
    choiceMade = true;
    console.log(pcScore);
    console.log(playerScore);
    round = 0;
    statusBar.textContent = 'You:' + playerScore + ' ' +  'PC:' + pcScore + ' ' + finalWinner;
    return;
}

function computerPlay() {

    return Math.floor(Math.random() * 3) + 1;
}


function decideWinner(player, pc) {
    let $result = new String();
    if (player === pc) { return 0; }
    if (player == "rock") {
        if (pc == "paper") { return 1; }
        if (pc == "scissors") { return 2; }
    }
    if (player == "paper") {
        if (pc == "scissors") { return 1; }
        if (pc == "rock") { return 2; }
    }
    if (player == "scissors") {
        if (pc == "rock") { return 1; }
        if (pc == "paper") { return 2; }
    }

}

function stringifyAns(ans) {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    ans = Number(ans);
    if (ans == 1) { return rock; }
    if (ans == 2) { return paper; }
    if (ans == 3) { return scissors; }
    return null;
}

choice.forEach(choice => choice.addEventListener('mouseover', addTransition));
choice.forEach(choice => choice.addEventListener('mouseleave', removeTransition));