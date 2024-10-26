import sys_Render from "./sys-render.js";
import sys_Event from "./sys-event.js";
import sys_Audio from "./sys-audio.js";
import sys_Image from "./sys-image.js";
import sys_Noise from "./sys-noise.js";
import sys_Particle from "./sys-particle.js";
export default class Engine {
    constructor(res_x, res_y) {
        this.systems = new Array;
        this.scenes = new Array;
        this.lookup = new Map;
        this.addSystem(new sys_Render(res_x, res_y));
        this.addSystem(new sys_Audio);
        this.addSystem(new sys_Image);
        this.addSystem(new sys_Event);
        this.addSystem(new sys_Noise);
        this.addSystem(new sys_Particle);
    }
    addSystem(system) {
        console.log(`[Engine.addSystem] ${system.constructor.name}`);
        this.systems.push(system);
        this.lookup.set(system.constructor.name, this.systems.length - 1);
    }
    getSystem(sys_type) {
        const idx = this.lookup.get(sys_type.name);
        return this.systems[idx];
    }
    addScene(scene) {
        this.addSystem(scene);
    }
    getScene(scene_type) {
        const idx = this.lookup.get(scene_type.name);
        return this.systems[idx];
    }
    preload() {
        console.log(`[Engine.preload]`);
        for (let system of this.systems) {
            system.preload(this);
        }
    }
    setup() {
        console.log(`[Engine.setup]`);
        for (let system of this.systems) {
            system.setup(this);
        }
    }
    draw() {
        for (let system of this.systems) {
            system.update(this);
        }
    }
}
//# sourceMappingURL=engine.js.map