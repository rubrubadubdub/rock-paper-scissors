//declare text area variables
const statusBar = document.querySelector('#statusMsg');


const selection = document.querySelectorAll('.throw');
const choice = document.querySelectorAll(`.throw[data-select=throw]`);
let round = 0;
let choiceMade = new Boolean();

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
    if(winner == 0){winnerStringify = "a tie"}
    if(winner == 1){winnerStringify = "the PC"}
    if(winner == 2){winnerStringify = "the Player"}
    let $result = 'The PC played ' + pcWrite + '. You played ' + playerWrite + '. So the winner is ' + winnerStringify + '.';
    console.log(playedSec);
    statusBar.textContent = $result;
    },500);
    setTimeout(function(){
        playedSec.classList.remove('played');
        choiceMade = false;
        return;
    },2500);
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