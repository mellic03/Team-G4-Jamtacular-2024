import Actor from "../../engine/actor.js";
import Engine from "../../engine/engine.js";


export default class BodyPart extends Actor
{
    constructor( x: number, y: number )
    {
        super(x, y, 0);
    }

    update( engine: Engine )
    {

    }

    draw( engine: Engine )
    {
        fill(0, 255, 0);
        circle(this.x, this.y, 32);

    }

}

