import System from "./system.js";
import vec2 from "./math/vec2.js";
import Engine from "./engine.js";
import { Graphics } from "p5";
import { math } from "./math/math.js";


export class RenderBuffer
{
    w: number;
    h: number;
    buffer = null;

    constructor( w: number, h: number, offline_ctx: any )
    {
        this.w = w;
        this.h = h;

        this.buffer = offline_ctx.createFramebuffer({
            width:   w,
            height:  h,
            density: 1,
            format:  FLOAT,
            textureFiltering: NEAREST
        });
    }

    read()
    {
        return this.buffer.pixels;
    }

    data()
    {
        return this.buffer.color;
    }

    map()
    {
        this.buffer.loadPixels();
        return this.buffer.pixels;
    }

    unmap()
    {
        this.buffer.updatePixels();
    }   
}


export default class sys_Render extends System
{
    width:  number;
    height: number;
    view  = new vec2(0, 0);
    scale = 1.0;
    avg_fps = 0;

    private offline_ctx: Graphics;
    private font: any;

    constructor( width=1024, height=1024 )
    {
        super();

        this.width  = width;
        this.height = height;
    }

    preload( engine: Engine ): void
    {
        this.font = loadFont("assets/font/RodettaStamp.ttf");
    }

    setup( engine: Engine ): void
    {
        createCanvas(this.width, this.height);
        frameRate(165);

        // this.offline_ctx = createGraphics(this.width, this.height, WEBGL);
        // textFont(this.font);
    }

    update( engine: Engine ): void
    {
        scale(this.scale);
        translate(-this.view.x, -this.view.y, 0);
        background(255);

        this.avg_fps = math.mix(this.avg_fps, frameRate(), 1.0/60.0);
    }

    avgFPS(): number
    {
        return this.avg_fps;
    }

    getOfflineContext(): Graphics
    {
        return this.offline_ctx;
    }

    rectInView( x, y, w, h )
    {
        const vx = this.view.x;
        const vy = this.view.y;
        const hw = (0.5 * this.width) / this.scale;
        const hh = (0.5 * this.height) / this.scale;

        const c0 = (vx-hw < x+w) && (vx+hw > x);
        const c1 = (vy-hh < y+h) && (vy+hh > y);

        return c0 && c1;
    }
}
