//let playerAnswer = parseInt(prompt("Please enter 1:Rock, 2:Paper, 3:Scissors"));
let pcAnswer = computerPlay();
let pcWrite = stringifyAns(pcAnswer);
let playerWrite = stringifyAns(playerAnswer);
let winner = decideWinner(playerWrite, pcWrite);
let $result = 'The PC played ' + pcWrite + '. You played ' + playerWrite + '. So the winner is ' + winner + '.';
console.log($result);



function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}
function decideWinner(player, pc) {
    let $result = new String();
    if (player === pc) { return "neither. It is a tie" }

    if (player == "rock") {
        if (pc == "paper") { return "the PC" }
        if (pc == "scissors") { return "the Player" }
    }
    if (player == "paper") {
        if (pc == "scissors") { return "the PC" }
        if (pc == "rock") { return "the Player" }
    }
    if (player == "scissors") {
        if (pc == "rock") { return "the PC" }
        if (pc == "paper") { return "the Player" }
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