import PlayerData from './PlayerData';
import PlayerConfig from './PlayerConfig';

export default class Player {
  socketId: string;
  playerConfig: PlayerConfig;
  playerData: PlayerData;

  constructor(name: string, socketId: string) {
    this.socketId = socketId;
    this.playerConfig = new PlayerConfig();
    this.playerData = new PlayerData(name);
  }
}