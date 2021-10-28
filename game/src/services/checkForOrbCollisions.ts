import { Orb, PlayerData, Player } from '../models';

const checkForOrbCollisions = (
  player: Player, 
  orbs: Array<Orb>,
  ) => {
  return new Promise((resolve, reject) => {
    orbs.forEach((orb, i)=>{
      if (player.playerData.locX + player.playerData.radius + orb.radius > orb.locX 
          && player.playerData.locX < orb.locX + player.playerData.radius + orb.radius
          && player.playerData.locY + player.playerData.radius + orb.radius > orb.locY 
          && player.playerData.locY < orb.locY + player.playerData.radius + orb.radius){
        const distance = Math.sqrt(
          ((player.playerData.locX - orb.locX) * (player.playerData.locX - orb.locX)) + 
          ((player.playerData.locY - orb.locY) * (player.playerData.locY - orb.locY))	
          );
        if (distance < player.playerData.radius + orb.radius) {
          player.playerData.score += 1;
          player.playerData.orbsAbsorbed += 1;
          if (player.playerConfig && player.playerConfig.zoom > 1) player.playerConfig.zoom -= .001;
          player.playerData.radius += 0.25;
          if (player.playerConfig && player.playerConfig.speed < -0.005) {
            player.playerConfig.speed += 0.005;
          } else if (player.playerConfig && player.playerConfig.speed > 0.005) {
            player.playerConfig.speed -= 0.005;
          }
          orbs.splice(i, 1, new Orb())
          resolve(i)
        }
      }
    });
    reject();
  });
}
        
const checkForPlayerCollisions = (
  player: Player, 
  players: Array<Player>, 
  ) => {
  return new Promise((resolve, reject) => {
    players.forEach((curPlayer, i)=>{
      if(curPlayer.socketId != player.socketId){
        const pLocx = curPlayer.playerData.locX
        const pLocy = curPlayer.playerData.locY
        const pR = curPlayer.playerData.radius
        if(player.playerData.locX + player.playerData.radius + pR > pLocx
          && player.playerData.locX < pLocx + player.playerData.radius + pR
          && player.playerData.locY + player.playerData.radius + pR > pLocy 
          && player.playerData.locY < pLocy + player.playerData.radius + pR) {
          const distance = Math.sqrt(
            ((player.playerData.locX - pLocx) * (player.playerData.locX - pLocx)) + 
            ((player.playerData.locY - pLocy) * (player.playerData.locY - pLocy))	
          );      
          if (distance < player.playerData.radius + pR){
            if (player.playerData.radius > pR) {
              const collisionData = updateScores(player.playerData, curPlayer.playerData);
              if (player.playerConfig && player.playerConfig.zoom > 1) {
                player.playerConfig.zoom -= (pR * 0.25) * .001;
              }
              players.splice(i, 1);
              resolve(collisionData);
            }
          }
        }
      }
    })
    reject();
  });
}


const updateScores = (killer: PlayerData, killed: PlayerData) => {
  killer.score += (killed.score + 10);
  killer.playersAbsorbed += 1;
  killed.alive = false;
  killer.radius += (killed.radius * 0.25)
  return {
    died: killed,
    killedBy: killer,
  }
}

export { checkForOrbCollisions, checkForPlayerCollisions }