import Actor from "../../engine/actor.js";
import Engine from "../../engine/engine.js";
import sys_Image from "../../engine/sys-image.js";
import Game from "../game.js";


export default class Item extends Actor
{
    image;
    ore_type: string;
    ore_strength: number; // time to harvest ore? measured in megapascals
    spawn_chance: number; // Spawn amount and rarity? idk how we are handling world gen

    constructor( x: number, y: number, image )
    {
        super(x, y);
        this.image = image;
    }

    update( engine: Engine ): void{
        const gameScene = engine.getScene(Game);
        let player = gameScene.player; 
        let inventory = gameScene.inventory;

        if (this.checkCollision(player)) {
            // console.log(this.ore_type);
            inventory.collectOre(this.ore_type, this.ore_strength, player.breakingPower);
        }
        

    }

    draw( engine: Engine ): void
    {
        super.draw(engine);

        image(this.image, this.x, this.y)

    }

    checkCollision(player: Actor): boolean {
        const distance = dist(this.x, this.y, player.x, player.y);
        const collisionRadius = 90;
        return distance < collisionRadius;
    }

}

