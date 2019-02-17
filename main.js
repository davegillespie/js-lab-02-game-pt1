"used strict";

let gameOn = prompt("Would you like to challenge The Almighty Grant at a game?");
let userName = prompt("Choose your username.");
let userHp = 40;
let grantHp = 10;
let userWins = 0;

if (gameOn = "yes") {
  playGame();
}

function playGame() {

    while (userHp > 0 && grantHp > 0 && userWins < 3) {
      userHp -= Math.floor((Math.random() * 2) + 1);
      grantHp -= Math.floor((Math.random() * 2) + 1);

      if (userHp > 0) {
        console.log(`${userName} has ${userHp} health points left.`);
        console.log(`The Almighty Grant has ${grantHp} health points left`);
      }
      if (grantHp <= 0) {
        userWins +=1;
      }

      if (userHp <= 0) {
        console.log(`${userName} has been defeated by The Almighty Grant!`);
        break;
        }

      if (userWins > 2) {
        console.log(`The Almighty Grant has 0 health points and 0 remaining lives. ${userName} wins!`);
        break;
      }

      if (grantHp <= 0 && userWins < 3) {
        console.log("Grant has lost this round. He loses one life! But wait, he's back and now has 10 health points!");
        grantHp = 10;
      }

    }
}


/* https://www.w3schools.com/jsref/jsref_random.asp */
