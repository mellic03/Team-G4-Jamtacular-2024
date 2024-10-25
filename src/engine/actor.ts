import Transform from "./transform.js";


export default abstract class Actor
{
    private children  = new Array<Actor>;
    private transform: Transform;

    constructor( x: number = 0, y: number = 0, theta: number = 0 )
    {
        this.transform = new Transform(x, y, theta);

        const og_update = this.update;

        this.update = () => {
          Actor.prototype.update.apply(this);
          return og_update.apply(this);
        };
    }

    pushChild( child: Actor )
    {
        this.children.push(child);
    }

    popChild()
    {
        return this.children.pop();
    }

    update()
    {
        // console.log(`[Actor.update]`);

        for (let child of this.children)
        {
            child.transform.mult(this.transform);
            child.update();
        }
    }

    abstract draw(): void;

}