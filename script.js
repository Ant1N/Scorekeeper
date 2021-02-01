function addPlayer() {
  const playerInfo = document.querySelector(".player"); //Get player class
  let clone = playerInfo.cloneNode(true); //clone the player class
  clone.class = "player";
  playerInfo.before(clone); //Insert player class
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //get random color
  playerInfo.style.backgroundColor = randomColor; //append the random color to the clone
}

function addScore() {
  const playerScore = document.querySelector(".score");
  let number = playerScore.innerHTML;
  console.log(number)
  playerScore.innerHTML = number++;
  playerScore.innerHTML = number;
}

// function removeScore() {
//   const playerScore = document.getElementById("score");
//   let number = score.innerHTML;
//   number--;
//   score.innerHTML = number;
// }

// const playerScore = document.getElementById("score");
// let number = score.innerHTML;
// number++;
// score.innerHTML = number;
// console.log(number)

// const playerScore = document.getElementById("score");
// let number = playerScore.innerHTML;
// playerScore.innerHTML = number++;
// score.innerHTML = number;
