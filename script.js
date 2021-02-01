var players = []
var userID = 1

function updateSB() {
  let element = document.getElementById('parent-list');
  element.innerHTML = '';
  players = players.sort((a,b) => {
    if(a.score > b.score)
      return -1
    if (a.score < b.score)
      return 1
    return 0 
  })
  for (i = 0; i < players.length; i++) {
    element.innerHTML += "<li class='player' id="+players[i].id+">\
    <p>"+players[i].name+"</p>\
    <span onclick='removeScore("+players[i].id+")'><i class='fas fa-minus-circle'></i></span>\
    <h2 class='score'>"+players[i].score+"</h2>\
    <span onclick='addScore("+players[i].id+")'><i class='fas fa-plus-circle'></i></span>\
    </li>"
  }
}

function addPlayer() {
  players.push({
    id: userID, 
    name: 'player' + userID,
    score: 0
  })
  userID++
  updateSB()
}

function resetGame() {
  players=[];
  userID = 1;
  updateSB();
}

function addScore(id) {
  for (i = 0; i < players.length; i++){
    if(id== players[i].id){
      players[i].score++
    }
  }
  updateSB()
}

function removeScore(id) {
  for (i = 0; i < players.length; i++){
    if(id== players[i].id){
      players[i].score--
    }
  }
  updateSB()
}