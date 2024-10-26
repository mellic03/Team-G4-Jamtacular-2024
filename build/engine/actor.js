import Transform from "./transform.js";
export default class Actor {
    constructor(x = 0, y = 0, theta = 0) {
        this.children = new Array;
        this.transform = new Transform(x, y, theta);
        // const og_update = this.update;
        // this.update = ( engine: Engine ) => {
        //   Actor.prototype.update.apply(this, engine);
        //   return og_update.apply(this, engine);
        // };
    }
    get pos() {
        return this.transform.worldpos;
    }
    get x() {
        return this.pos.x;
    }
    get y() {
        return this.pos.y;
    }
    pushChild(child) {
        this.children.push(child);
    }
    popChild() {
        return this.children.pop();
    }
    update(engine) {
        for (let child of this.children) {
            child.update(engine);
        }
    }
    draw(engine) {
    }
    moveTo(pos, speed = 1) {
        this.transform.localpos.moveTo(pos, speed);
    }
}
//# sourceMappingURL=actor.js.map