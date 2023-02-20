const type = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button')
const cText = document.getElementById('cText');

const h2 = document.createElement('h2');
h2.textContent = 'Welcome to the game!';
cText.appendChild(h2);

const playerText = document.createElement('h3');
const compText = document.createElement('h3');
const resultText = document.createElement('h3');
resultText.textContent = '';
cText.append(playerText, compText, resultText);

function compChoice() {
    const comp = type[Math.floor(Math.random()*type.length)];
    return comp
}


function play(player, comp) {
    if (player === comp) {
        return 'T';
      } else if (
        (player === 'rock' && comp === 'scissors') ||
        (player === 'paper' && comp === 'rock') ||
        (player === 'scissors' && comp === 'paper')
      ) {
        return 'W';
      } else {
        return 'L';
      }
}

function main() {
    let playerPoints = 0
    let compPoints = 0
    let round = 0
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (round >= 5) {
                alert('Game over!');
                return;
            }
            let player = button.id
            let comp = compChoice()
            let result = play(player, comp)
            if (result === "W") {
                playerPoints += 1
                playerText.textContent = `YOU chose: ${player} - You points: ${playerPoints}`
                compText.textContent = `BOT chose: ${comp} - Computer points: ${compPoints}`
                round += 1
            } else
            if (result === "L") {
                compPoints += 1
                playerText.textContent = `YOU chose: ${player} - You points: ${playerPoints}`
                compText.textContent = `BOT chose: ${comp} - Computer points: ${compPoints}`
                round += 1
            } else
            if (result === "T") {
                playerText.textContent = `YOU chose: ${player} - You points: ${playerPoints}`
                compText.textContent = `BOT chose: ${comp} - Computer points: ${compPoints}`
                round += 1
            }
            if (round >= 5) {
                setTimeout(() => {
                  if (playerPoints > compPoints) {
                    alert('You win!');
                  } else if (compPoints > playerPoints) {
                    alert('You lose!');
                  } else {
                    alert('Tied!');
                  }
                }, 1); // Delay alert by 1 second to show player and computer choices
              }
        })
    })

}

main();
