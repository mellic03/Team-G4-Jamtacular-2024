import Enemy from "../enemy.js";
import Game from "../game.js";
import Engine from "../../engine/engine.js";

export default class enemy_Shark extends Enemy 
{
  speedMultiplier: number;

  constructor(x: number, y: number, image) {
    super(x, y, 100, 20, 1000, image);
    this.speedMultiplier = 1.5;
  }

  update(engine: Engine): void
  {
    const gameScene = engine.getScene(Game);
    let player = gameScene.player;
    
    if (this.detectPlayer(player)) {
      this.moveTo(player.pos)
    }
  }
}
