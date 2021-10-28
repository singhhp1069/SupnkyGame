import { getRandomColor } from '../services/generateRandomColors';
import { SETTINGS } from '../constant';

export default class Orb {
  color: string;
  locX: number;
  locY: number;
  radius: number;

  constructor() {
    this.radius = 10;
    this.color = getRandomColor();
    this.locX = Math.floor(Math.random() * SETTINGS.worldWidth);
    this.locY = Math.floor(Math.random() * SETTINGS.worldHeight);
  }
}