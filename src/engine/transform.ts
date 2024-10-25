import vec2 from "./math/vec2.js";

export default class Transform
{
    private static I = new Transform(0, 0, 0);

    localpos: vec2;
    worldpos: vec2;

    theta: number;
    rot: number;

    parent:   Transform;
    children: Array<Transform>;

    constructor( x: number, y: number, theta: number )
    {
        this.localpos = new vec2(x, y);
        this.worldpos = new vec2(0, 0);

        this.theta = theta;
        this.rot = theta;

        this.parent   = Transform.I;
        this.children = [];
    }

    mult( parent: Transform )
    {
        this.rot = parent.rot + this.theta;
        this.worldpos.copy(this.localpos);
        this.worldpos.rotate(this.rot);
        this.worldpos.add(parent.worldpos);
    }

    computeHierarchy( parent: Transform = Transform.I )
    {
        this.mult(parent);

        for (let child of this.children)
        {
            child.computeHierarchy(this);
        } 
    }

    from( x: number, y: number, theta: number ): void
    {
        this.localpos.from(x, y);
        this.theta = theta;
    }

    translateLocal( x: number, y: number ): void
    {
        this.localpos.x += x;
        this.localpos.y += y;
    }
    
    get x()
    {
        return this.worldpos.x;
    }
    
    get y()
    {
        return this.worldpos.y;
    }

};

