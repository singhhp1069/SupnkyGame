import { SETTINGS } from '../constant';

export default class PlayerConfig {
  xVector: number;
  yVector: number;
  speed: number;
  zoom: number;

  constructor() {
    this.xVector = 0;
    this.yVector = 0;
    this.speed = SETTINGS.defaultSpeed;
    this.zoom = SETTINGS.defaultZoom;
  }
}