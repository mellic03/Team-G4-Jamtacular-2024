import vec2 from "./math/vec2.js";
class Transform {
    constructor(x, y, theta) {
        this.localpos = new vec2(x, y);
        this.worldpos = new vec2(0, 0);
        this.theta = theta;
        this.rot = theta;
        this.parent = Transform.I;
        this.children = [];
    }
    mult(parent) {
        this.rot = parent.rot + this.theta;
        this.worldpos.copy(this.localpos);
        this.worldpos.rotate(this.rot);
        this.worldpos.add(parent.worldpos);
    }
    computeHierarchy(parent = Transform.I) {
        this.mult(parent);
        for (let child of this.children) {
            child.computeHierarchy(this);
        }
    }
    from(x, y, theta) {
        this.localpos.from(x, y);
        this.theta = theta;
    }
    translateLocal(x, y) {
        this.localpos.x += x;
        this.localpos.y += y;
    }
    get x() {
        return this.worldpos.x;
    }
    get y() {
        return this.worldpos.y;
    }
}
Transform.I = new Transform(0, 0, 0);
export default Transform;
;
//# sourceMappingURL=transform.js.map