const socket = io.connect('http://localhost:3000');

const init = () => {
  if(isGameOn == 1) {
    draw();
    socket.emit('init', {...player});
  }
}

socket.on('initReturn', (data) => {
  orbs = data.orbs;
  hurdles = data.hurdles;
  setInterval(() => {
    socket.emit('tick', {
      xVector: player.xVector,
      yVector: player.yVector,
    })
  }, 33);
})

socket.on('tock', (data) => {
  players = data.players;
  currentPlayer = data.players.find(player => player.socketId === socket.id);
  if (currentPlayer) {
    player.locX = currentPlayer.playerData.locX;
    player.locY = currentPlayer.playerData.locY;
  }
});

socket.on('orbSwitch', (data) => {
  orbs.splice(data.index, 1, data.newOrb);
});

socket.on('updateLeaderBoard', (data) => {
  document.querySelector('.leader-board').innerHTML = "";
  data.forEach((curPlayer) => {
    document.querySelector('.leader-board').innerHTML += `<li class="leaderboard-player">${curPlayer.name} - ${curPlayer.score}</li>`;
  });
});

socket.on('playerDeath',(data)=>{
  document.querySelector('#game-message').innerHTML = `${data.died.name} 'Died !!!'`
  $("#game-message").css({
      "background-color": "red",
      "font-size": "40px",
      "opacity": 1
  });
  $("#game-message").show();
  $("#game-message").fadeOut(7000);
  isGameOn = 0;
  setTimeout(() => {  window.location.href = "/gameover.html?score=" + data.died.score;}, 2000);
  
  // $('#loginModal').modal('show');
});
