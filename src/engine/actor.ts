import Engine from "./engine.js";
import vec2 from "./math/vec2.js";
import Transform from "./transform.js";


export default class Actor
{
    public children:  Array<Actor>;
    public transform: Transform;

    constructor( x: number = 0, y: number = 0, theta: number = 0 )
    {
        this.children  = new Array<Actor>;
        this.transform = new Transform(x, y, theta);

        // const og_update = this.update;
        // this.update = ( engine: Engine ) => {
        //   Actor.prototype.update.apply(this, engine);
        //   return og_update.apply(this, engine);
        // };
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
        for (let child of this.children)
        {
            child.update(engine);
        }
    }

    draw( engine: Engine ): void
    {

    }

    moveTo( pos: vec2, speed=1 ): void
    {
        this.transform.localpos.moveTo(pos, speed);
    }

}