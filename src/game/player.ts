import Character from "./character.js";
import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import vec2 from "../engine/math/vec2.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import BodyPartHead from "./bodypart/head.js";
import sys_Render from "../engine/sys-render.js";
import Actor from "../engine/actor.js";


export default class Player extends Character
{
    health: number;
    maxHealth: number;
    constructor( x: number, y: number )
    {
        super(x, y);

        this.addHead(new BodyPartHead(-32, 0));
        this.addHead(new BodyPartHead(+32, 0));

        this.drag = 1.0;

        this.health = 100;
        this.maxHealth = 100;
    }

    update( engine: Engine )
    {
        super.update(engine);

        const ren = engine.getSystem(sys_Render);
        ren.view.mixxy(this.x, this.y, 0.1);

        const tmp = vec2.temp
        tmp.from(0, 0);

        if (IO.keyDown(KEYCODE.SPACE))
        {
            tmp.x += 1;
        } 

        if (IO.keyDown(KEYCODE.A))
        {
            this.transform.localrot -= 0.01;
        }

        if (IO.keyDown(KEYCODE.D))
        {
            this.transform.localrot += 0.01;
        }

        tmp.rotate(this.transform.worldrot);

        
        if (this.y < 0.0)
        {
            this.drag = 0.2;
            this.addForce(0.0, 4.0);
        }

        else
        {
            this.drag = 0.4;
            this.addForce(4*tmp.x, 4*tmp.y);
        }
    }

    draw( engine: Engine )
    {
        super.draw(engine);

        const healthBarWidth = 100;
        const healthRatio = this.health / this.maxHealth;

        fill (0,255, 0);
        rect(this.x - healthBarWidth / 2, this.y - 75, healthBarWidth * healthRatio, 10);
    
        // fill(0, 255, 0);
        // circle(this.x-32, this.y, 32);
        // circle(this.x, this.y, 32);
        // circle(this.x+32, this.y, 32);
    }

    takeDamage(amount: number) {
        this.health -= amount;
        console.log(`Player took ${amount} damage. Health: This ${this.health}`);

        if (this.health < 0) {
            this.health = 0;
            this.handleDeath();
        }
    }

    handleDeath() {
        console.log("Player is dead");
    }
}


