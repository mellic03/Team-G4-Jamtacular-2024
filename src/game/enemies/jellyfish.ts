import Enemy from "../enemy.js";
import Game from "../game.js";
import Engine from "../../engine/engine";

export default class enemy_Jellyfish extends Enemy
{
    floatRadius: number;
    floatSpeed: number;
    frameIndex: number;
    

    constructor(x: number, y: number, image) 
    {
        super(x, y, 50, 10, 0, image);
        this.floatRadius = 30;
        this.floatSpeed = 0.5;
    }

    update(engine: Engine) 
    {
        this.floatAround();
    }
    
    floatAround(): void {
        const offsetX = (Math.random() - 0.5) * this.floatSpeed;
        const offsetY = (Math.random() - 0.5) * this.floatSpeed;

        this.x += offsetX;
        this.y += offsetY
    }
}