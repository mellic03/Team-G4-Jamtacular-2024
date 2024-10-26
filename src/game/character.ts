import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import BodyPart from "./bodypart/bodypart.js";


export default class Character extends Actor
{
    head = new Array<BodyPart>;
    arms = new Array<BodyPart>;
    legs = new Array<BodyPart>;

    constructor( x: number, y: number )
    {
        super(x, y, 0);
    }

    addHead( head: BodyPart )
    {
        this.head.push(head);
    }

    addArm( arm: BodyPart )
    {
        this.arms.push(arm);
    }

    addLeg( leg: BodyPart )
    {
        this.legs.push(leg);
    }

    update( engine: Engine )
    {
        super.update(engine);

        for (let B of this.head)
        {
            B.transform.mult(this.transform);
        }
    }

    draw( engine: Engine )
    {
        fill(0, 255, 0);
        circle(this.x, this.y, 32);

        for (let B of this.head)
        {
            B.draw(engine);
        }
    }

}

