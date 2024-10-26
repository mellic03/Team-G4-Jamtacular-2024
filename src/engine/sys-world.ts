import System from "./system.js";
import vec2 from "./math/vec2.js";
import Engine from "./engine.js";
import sys_Render, { RenderBuffer } from "./sys-render.js";
import { Framebuffer, Graphics, Shader } from "p5";
import sys_Noise from "./sys-noise.js";
import { math } from "./math/math.js";



class WorldChunk
{
    col:   number;
    row:   number;
    width: number;
    scale: number;
    span:  number;
    data:  RenderBuffer;

    constructor( col, row, w=64, s=4, engine: Engine )
    {
        this.col = col
        this.row = row;
        this.width = w;
        this.scale = s;
        this.span  = w*s;

        const ren = engine.getSystem(sys_Render);
        const ctx = ren.getOfflineContext();
        this.data = new RenderBuffer(this.width, this.width, ctx);

        this.generate(engine);
    }

    private generate( engine: Engine )
    {
        const xpos = this.width * this.col;
        const ypos = this.width * this.row;

        const nsys   = engine.getSystem(sys_Noise);
        const pixels = this.data.map();

        for (let row=0; row<this.width; row++)
        {

            for (let col=0; col<this.width; col++)
            {
                const idx = 4 * (this.width*row + col);

                const x = xpos + col;
                const y = ypos - row;

                if (y < 0)
                {
                    pixels[idx+0] = 160 / 255.0;
                    pixels[idx+1] = 204 / 255.0;
                    pixels[idx+2] = 254 / 255.0;
                    pixels[idx+3] = 1;
                    
                    continue
                }

                let r = 0;
                let g = 0;
                let b = 0;

                let rockiness = math.max((-y + 512)/1024, 0);
                    rockiness = 0.8 * Math.exp(rockiness - 1);

                let height = rockiness * nsys.FBM(x/256+2048, y/256+2048+128, 8, 0.7, 2.0, nsys.perlin);
                let depth  = math.max(y/64.0, 0);
                let attenuation = 1.0 / (1.0 + depth*depth);
                    // attenuation = 1.0;

                g = math.clamp(0, 1, height - 0.12);

                if (g < 0.4)
                {
                    r = 0.5*(g + attenuation);
                    g = 0.5*(g + attenuation);
                    b = 0.3*(g + attenuation);
                }

                else if (g < 1.4)
                {
                    r = 0.2 * attenuation;
                    g = 0.2 * attenuation;
                    b = 0.5 * attenuation;
                }

                pixels[idx+0] = r;
                pixels[idx+1] = g;
                pixels[idx+2] = b;
                pixels[idx+3] = 1;
            }
        }

        this.data.unmap();
    }
}


export default class sys_World extends System
{
    width:  number;
    height: number;
    chunks = new Array<WorldChunk>;
    program: Shader;

    constructor( width=1024, height=1024 )
    {
        super();

        this.width  = width;
        this.height = height;
    }

    preload( engine: Engine ): void
    {
        this.program = loadShader("src/engine/shader/chunk.vs", "src/engine/shader/chunk.fs");
    }

    setup( engine: Engine ): void
    {
        const ren = engine.getSystem(sys_Render);

        for (let i=-8; i<=8; i++)
        {
            for (let j=-2; j<=8; j++)
            {
                this.chunks.push(new WorldChunk(i, j, 64, 8, engine));
            }
        }
    }


    private draw_chunk( pg: Graphics, C: WorldChunk)
    {
        const program = this.program;
        program.setUniform("un_corner",  [C.col, C.row, 0.0]);
        program.setUniform("un_texture", C.data.data());
        pg.rect(0, 0, C.width, C.width);
        image(pg, C.span*C.col, C.span*C.row, C.span, C.span);
    }


    update( engine: Engine ): void
    {
        const ren = engine.getSystem(sys_Render);
        const pg  = ren.getOfflineContext();
              pg.shader(this.program);

        this.program.setUniform("un_view", [ren.view.x, ren.view.y]);

        push();

        for (let C of this.chunks)
        {
            if (ren.rectInView(C.span*C.col, C.span*C.row, C.span, C.span))
            {
                this.draw_chunk(pg, C);
            }
        }

        pop();
    }

}
