import { Player } from '../models';
import { players } from './initGame';

export const getLeaderBoard = () => {
  players.sort((a: Player,b: Player)=>{
    return b.playerData.score - a.playerData.score;
  });
  return players.map((curPlayer)=>{
    return{
      name: curPlayer.playerData.name,
      score: curPlayer.playerData.score
    }
  })
}