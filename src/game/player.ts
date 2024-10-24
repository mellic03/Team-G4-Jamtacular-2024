import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";


export default class Player extends Actor
{
    constructor( x: number, y: number )
    {
        super(x, y, 0);
    }

    update( engine: Engine )
    {
        // Do whatever here

    }

    draw( engine: Engine )
    {
        fill(0, 255, 0);
        circle(this.transform.x, this.transform.y, 32);
    }

}

