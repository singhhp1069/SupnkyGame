import { app } from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';
import {
  checkForPlayerCollisions,
  checkForOrbCollisions,
} from './services/checkForOrbCollisions';
import {
  checkForHurdleCollisions,
} from './services/checkForHurdleCollisions';
import {
  getLeaderBoard,
} from './services/getLeaderBoarder';
import {
  orbs,
  players,
  hurdles,
} from './services/initGame';
import { Player } from './models';
import { SETTINGS } from './constant';

const http = createServer(app);

const io = new Server(http, {
  cors: {
    origin: '*'
  }
});

setInterval(() => {
  if (players.length > 0) {
    io.to('game').emit('tock', {
      players,
    });
  }
}, 33);

io.on('connection', (socket) => {
  socket.on('init', (data: { name: string }) => {
    const rooms = Array.from(socket.rooms);
    if (!rooms.includes('game')) {
      socket.join('game');
      const player = new Player(data.name, socket.id);
      players.push(player);
      socket.emit('initReturn', { orbs, hurdles })
    }
  });

  socket.on('tick', (data) => {
    const index = players.findIndex(player => player.socketId === socket.id);
    const player = players[index];
    if (!data.xVector || !data.yVector || !player || !player.playerConfig) {
      return;
    }
    player.playerConfig.xVector = data.xVector;
    player.playerConfig.yVector = data.yVector;
    if ((player.playerData.locX < 5 && player.playerConfig.xVector < 0) || (player.playerData.locX > SETTINGS.worldWidth) && (data.xVector > 0)) {
      player.playerData.locY -= player.playerConfig.speed * data.yVector;
    } else if ((player.playerData.locY < 5 && data.yVector > 0) || (player.playerData.locY > SETTINGS.worldHeight) && (data.yVector < 0)) {
      player.playerData.locX += player.playerConfig.speed * data.xVector;
    } else {
      player.playerData.locX += player.playerConfig.speed * data.xVector;
      player.playerData.locY -= player.playerConfig.speed * data.yVector;
    }
    checkForOrbCollisions(player, orbs).then((data) => {
      const orbData = {
        index: data as number,
        newOrb: orbs[data as number],
      }
      io.to('game').emit('orbSwitch', orbData);
      io.to('game').emit('updateLeaderBoard', getLeaderBoard());
    }).catch(err => {
    });

    checkForHurdleCollisions(player, hurdles).then((data) => {
      const hurdleData = {
        index: data as number,
        newHurdle: hurdles[data as number],
      }
      io.to('game').emit('playerDeath', data);
      io.to('game').emit('updateLeaderBoard', getLeaderBoard());
    }).catch(err => {
    });

    checkForPlayerCollisions(player, players).then((data) => {
      io.to('game').emit('playerDeath', data);
      io.to('game').emit('updateLeaderBoard', getLeaderBoard());
    }).catch(err => {
    });
  });

  socket.on('disconnect', () => {
    console.log(socket.id);
    socket.leave('game');
    const index = players.findIndex(player => player.socketId === socket.id);
    if (index >= 0) {
      players.splice(index, 1);
      io.to('game').emit('updateLeaderBoard', getLeaderBoard());
    }
    socket.disconnect();
  });
});

export { io, http };
