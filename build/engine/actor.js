import Transform from "./transform.js";
export default class Actor {
    constructor(x = 0, y = 0, theta = 0) {
        this.children = new Array;
        this.transform = new Transform(x, y, theta);
        const og_update = this.update;
        this.update = () => {
            Actor.prototype.update.apply(this);
            return og_update.apply(this);
        };
    }
    get pos() {
        return this.transform.worldpos;
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