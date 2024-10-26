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

        const og_update = this.update;
        this.update = () => {
          Actor.prototype.update.apply(this);
          return og_update.apply(this);
        };
    }

    get pos()
    {
        return this.transform.worldpos;
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