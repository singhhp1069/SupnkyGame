import { Hurdle , PlayerData, Player } from '../models';

const checkForHurdleCollisions = (
  player: Player, 
  hurdles: Array<Hurdle>,
  ) => {
  return new Promise((resolve, reject) => {
    hurdles.forEach((hurdle, i)=>{
      if (player.playerData.locX + player.playerData.radius + hurdle.radius > hurdle.locX 
          && player.playerData.locX < hurdle.locX + player.playerData.radius + hurdle.radius
          && player.playerData.locY + player.playerData.radius + hurdle.radius > hurdle.locY 
          && player.playerData.locY < hurdle.locY + player.playerData.radius + hurdle.radius){
        const distance = Math.sqrt(
          ((player.playerData.locX - hurdle.locX) * (player.playerData.locX - hurdle.locX)) + 
          ((player.playerData.locY - hurdle.locY) * (player.playerData.locY - hurdle.locY))	
          );
        if (distance < player.playerData.radius + hurdle.radius) {
          const collisionData = hurdleKilled(player.playerData);
              resolve(collisionData);
          resolve(i)
        }
      }
    });
    reject();
  });
}
        
const hurdleKilled = (killed: PlayerData) => {
  killed.alive = false;
  return {
    died: killed,
    killedBy: "hurdle",
  }
}

export { checkForHurdleCollisions }