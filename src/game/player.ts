import Character from "./character.js";
import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import vec2 from "../engine/math/vec2.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import BodyPartHead from "./bodypart/head.js";
import sys_Render from "../engine/sys-render.js";


export default class Player extends Character
{
    constructor( x: number, y: number )
    {
        super(x, y);

        this.addHead(new BodyPartHead(0, 64));
    }

    update( engine: Engine )
    {
        const ren = engine.getSystem(sys_Render);
        ren.view.mixxy(this.x, this.y, 0.1);

        const tmp = vec2.temp
        tmp.from(0, 0);

        if (IO.keyDown(KEYCODE.W)) {
            tmp.y -= 1;
        } 
        if (IO.keyDown(KEYCODE.S)) {
            tmp.y += 1;
        }
        if (IO.keyDown(KEYCODE.D)) {
            tmp.x += 1;
        }
        if (IO.keyDown(KEYCODE.A)) {
            tmp.x -= 1;
        }

        this.addForce(16*tmp.x, 16*tmp.y);
    }

    draw( engine: Engine )
    {
        fill(0, 255, 0);
        circle(this.x-32, this.y, 32);
        circle(this.x, this.y, 32);
        circle(this.x+32, this.y, 32);

    }

}


