import System from "./system.js";
import vec2 from "./math/vec2.js";
export default class sys_Render extends System {
    constructor(width = 1024, height = 1024) {
        super();
        this.view = new vec2(0, 0);
        this.width = width;
        this.height = height;
    }
    preload(engine) {
    }
    setup(engine) {
        createCanvas(this.width, this.height, WEBGL);
    }
    update(engine) {
        translate(-this.view.x, -this.view.y, 0);
        background(200);
    }
}
//# sourceMappingURL=sys-render.js.map