import { getRandomColor } from '../services/generateRandomColors';
import { SETTINGS } from '../constant';

export default class PlayerData {
  name: string;
  locX: number;
  locY: number;
  radius: number;
  color: string;
  score: number;
  orbsAbsorbed: number;
  playersAbsorbed: number;
  alive: boolean;

  constructor(name: string) {
    this.name = name;
    this.color = getRandomColor();
    this.radius = SETTINGS.defaultSize;
    this.locX = Math.floor(Math.random() * SETTINGS.worldWidth + 100);
    this.locY = Math.floor(Math.random() * SETTINGS.worldHeight + 100);
    this.score = 0;
    this.orbsAbsorbed = 0;
    this.alive = true;
    this.playersAbsorbed = 0;
  }

}