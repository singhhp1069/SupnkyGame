import { Orb, Player, Hurdle } from '../models';
import { SETTINGS } from '../constant';

let orbs: Array<Orb> = [];
let players: Array<Player> = [];
let hurdles: Array<Hurdle> = [];

const initGame = () => {
  for (let i = 0; i < SETTINGS.defaultOrbs; i++) {
    orbs.push(new Orb());
  }

  for (let i = 0; i < SETTINGS.defaultKillers; i++) {
    hurdles.push(new Hurdle());
  }
}

initGame();

export { orbs, players, hurdles };