import Actor from "../../engine/actor.js";
import Engine from "../../engine/engine.js";
import BodyPart from "./bodypart.js";


export default class BodyPartHead extends BodyPart
{
    constructor( x: number, y: number )
    {
        super(x, y);
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

