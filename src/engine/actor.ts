import Engine from "./engine.js";
import vec2 from "./math/vec2.js";
import Transform from "./transform.js";
import { math } from "./math/math.js";


export default class Actor
{
    public children:  Array<Actor>;
    public transform: Transform;
    private vel = new vec2(0, 0);

    constructor( x: number = 0, y: number = 0, theta: number = 0 )
    {
        this.children  = new Array<Actor>;
        this.transform = new Transform(x, y, theta);

        const og_update = this.update;
        this.update = ( engine: Engine ) => {
          Actor.prototype.update.call(this, engine);
          return og_update.call(this, engine);
        };
    }

    get pos()
    {
        return this.transform.worldpos;
    }

    get x()
    {
        return this.pos.x;
    }

    get y()
    {
        return this.pos.y;
    }

    set x( n )
    {
        this.transform.localpos.x = n;
    }

    set y( n )
    {
        this.transform.localpos.y = n;
    }

    pushChild( child: Actor ): void
    {
        this.children.push(child);
    }

    popChild(): Actor
    {
        return this.children.pop();
    }

    update( engine: Engine ): void
    {
        const dt = deltaTime / 1000.0;
        const a  = math.clamp(4.0*dt, 0, 1);

        this.transform.localpos.x += dt*this.vel.x;
        this.transform.localpos.y += dt*this.vel.y;

        this.vel.mixxy(0, 0, a);

        for (let child of this.children)
        {
            child.update(engine);
        }
    }

    draw( engine: Engine ): void
    {

    }

    addForce( x: number, y: number )
    {
        this.vel.addxy(x, y);
    }

    move( x: number, y: number ): void
    {
        this.transform.localpos.x += x;
        this.transform.localpos.y += y;
    }

    moveTo( pos: vec2, speed=1 ): void
    {
        this.transform.localpos.moveTo(pos, speed);
    }
}