import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import Game from "./game.js";


export default class Enemy extends Actor
{
    health: number;
    damage: number;
    detectionRadius: number;

    constructor( x: number, y: number, health: number, damage:number, detectionRadius: number )
    {
        super(x, y, 0);
        this.health = health;
        this.damage = damage;
        this.detectionRadius = detectionRadius;
    }

  update(engine: Engine) {
    const gameScene = engine.getScene(Game);
    const player = gameScene.player; // get the player object

    // basic detection logic
    if (this.detectPlayer(player)) {
      this.moveTo(player.pos); // move towards the player
    }
  }

  detectPlayer(player: Actor): boolean {
    const distance = dist(this.x, this.y, player.x, player.y);
    return distance < this.detectionRadius;
  }

  handleDeath() {
    console.log("Enemy defeated");
    // i need to add logic on removing enemy 
  }

  takeDamage(amount: number) {
    this.health -= amount;
    if (this.health <= 0) {
        this.handleDeath();
    }
  }

  draw( engine: Engine )
  {
      // fill(255, 0, 0);
      const imgSys = engine.getSystem(sys_Image);
      const enemyImg = imgSys.get('assets/img/enemyImg.png');
      image(enemyImg, this.x, this.y);
  }
}

