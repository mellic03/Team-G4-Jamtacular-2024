import System from "./system.js";
import sys_Render from "./sys-render.js";
import sys_Event from "./sys-event.js";
import sys_Audio from "./sys-audio.js";
import sys_Image from "./sys-image.js";
import sys_Noise from "./sys-noise.js";
import sys_Particle from "./sys-particle.js";
import Scene from "./scene.js";


export default class Engine
{
    private systems = new Array<System>;
    private scenes  = new Array<Scene>;
    private lookup  = new Map<string, number>;

    constructor( res_x, res_y )
    {
        this.addSystem(new sys_Render(res_x, res_y));
        this.addSystem(new sys_Audio);
        this.addSystem(new sys_Image);
        this.addSystem(new sys_Event);
        this.addSystem(new sys_Noise);
        this.addSystem(new sys_Particle);
    }

    addSystem( system: System )
    {
        console.log(`[Engine.addSystem] ${system.constructor.name}`);

        this.systems.push(system);
        this.lookup.set(system.constructor.name, this.systems.length-1);
    }

    getSystem<T extends System>( sys_type: { new(): T }): T
    {
        const idx = this.lookup.get(sys_type.name);
        return this.systems[idx] as T;
    }

    addScene<T extends Scene>( scene: Scene ): void
    {
        this.addSystem(scene);
    }

    getScene<T extends Scene>( scene_type: { new(): T }): T
    {
        const idx = this.lookup.get(scene_type.name);
        return this.systems[idx] as T;
    }

    preload()
    {
        console.log(`[Engine.preload]`);

        for (let system of this.systems)
        {
            system.preload(this);
        }
    }
 
    setup()
    {
        console.log(`[Engine.setup]`);

        for (let system of this.systems)
        {
            system.setup(this);
        }
    }

    draw(): void
    {
        for (let system of this.systems)
        {
            system.update(this);
        }
    }
}

