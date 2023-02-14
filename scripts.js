const type = ["rock", "paper", "scissors"];

function playerSelection(){
    let ans = prompt("Choose: Rock, Paper, or Scissors")
    return ans
}

function compChoice(){
    return type[Math.floor(Math.random()*type.length)];
}

function score(player, comp){
    if (player === comp) {
        return "tie"
    } else 
    if ((player === "rock" && comp === "scissors") || (player === "paper" && comp === "rock") || (player === "scissors" && comp === "rock")) {
        return "win"
    }
    else {
        return "lose"
    }
}

var playerPoints = 0;
var compPoints = 0;

for (let i=0;i<5;i++) {
    var player = playerSelection()
    var comp = compChoice()
    console.log(player)
    console.log(comp)
    let res = score(player, comp)
    if (res === "win"){
        playerPoints += 1
    }
    else if (res === "lose") {
        compPoints += 1
    }
    else;
    console.log('Your points:', playerPoints)
    console.log('Comp points:', compPoints)
}

if (playerPoints < compPoints) {
    console.log("You LOSE!!!")
}
else if (playerPoints == compPoints) {
    console.log("It's a TIE")
}
else {
    console.log("You WIN!!! Congrats")
}
