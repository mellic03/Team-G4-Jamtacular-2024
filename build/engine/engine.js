import sys_Render from "./sys-render.js";
import sys_Event from "./sys-event.js";
import sys_Audio from "./sys-audio.js";
import sys_Image from "./sys-image.js";
import sys_Noise from "./sys-noise.js";
import sys_Particle from "./sys-particle.js";
export default class Engine {
    constructor(res_x, res_y) {
        this.systems = new Map;
        this.addSystem(new sys_Render(res_x, res_y));
        this.addSystem(new sys_Audio);
        this.addSystem(new sys_Image);
        this.addSystem(new sys_Event);
        this.addSystem(new sys_Noise);
        this.addSystem(new sys_Particle);
    }
    addSystem(system) {
        console.log(`[Engine.addSystem] ${system.constructor.name}`);
        this.systems.set(system.constructor.name, system);
    }
    getSystem(sys_type) {
        return this.systems.get(sys_type.name);
    }
    preload() {
        console.log(`[Engine.preload]`);
        for (let [name, system] of this.systems) {
            system.preload();
        }
    }
    setup() {
        console.log(`[Engine.setup]`);
        for (let [name, system] of this.systems) {
            system.setup();
        }
    }
    draw() {
        for (let [name, system] of this.systems) {
            system.update();
        }
    }
}
//# sourceMappingURL=engine.js.map