import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import Game from "./game.js";


export default class Enemy extends Actor
{
    constructor( x: number, y: number )
    {
        super(x, y, 0);
    }

    update( engine: Engine )
    {
        super.update(engine);

    }

    draw( engine: Engine )
    {
        fill(255, 0, 0);
        circle(this.x, this.y, 32);
    }

}
