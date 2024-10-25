import System from "./system.js";
import vec2 from "./math/vec2.js";


export default class sys_Render extends System
{
    width:  number;
    height: number;
    view = new vec2(0, 0);

    constructor( width=1024, height=1024 )
    {
        super();

        this.width  = width;
        this.height = height;
    }

    preload(): void
    {

    }
    
    setup(): void
    {
        createCanvas(this.width, this.height, WEBGL);

    }

    update(): void
    {
        translate(-this.view.x, -this.view.y, 0);
        background(200);

    }


}
