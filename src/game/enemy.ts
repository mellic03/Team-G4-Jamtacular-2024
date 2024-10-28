import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import sys_Image from "../engine/sys-image.js";
import Game from "./game.js";

export default class Enemy extends Actor {
  health: number;
  damage: number;
  detectRadius: number;
  image;

  constructor(x: number, y: number, health: number, damage: number, detectRadius: number, image) {
    super(x, y, 0);
    this.health = health;
    this.damage = damage;
    this.detectRadius = detectRadius
    this.image = image; 
  }

  update(engine: Engine): void {
    const gameScene = engine.getScene(Game);
    let player = gameScene.player.pos;
    this.moveTo(player, 2)
  }

  draw(engine: Engine): void {
    const imgSys = engine.getSystem(sys_Image);
    const enemyImg = imgSys.get(this.image);
    image(enemyImg, this.x, this.y);
  }

  takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health <= 0) {
      this.handleDeath();
    }
  }

  handleDeath(): void {
    console.log("Enemy defeated");
    
  }

  detectPlayer(player: Actor): boolean {
    const distance = dist(this.x, this.y, player.x, player.y);
    
    return this.detectRadius > 0 && distance < this.detectRadius;
  }
}
