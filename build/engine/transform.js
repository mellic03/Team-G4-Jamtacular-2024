import vec2 from "./math/vec2.js";
class Transform {
    constructor(x, y, theta) {
        this.localpos = new vec2(x, y);
        this.worldpos = new vec2(0, 0);
        this.localrot = theta;
        this.worldrot = theta;
        this.parent = Transform.I;
        this.children = [];
    }
    InverseKinematics(length) {
    }
    ForwardKinematics(parent = Transform.I) {
        this.worldrot = parent.worldrot + this.localrot;
        this.worldpos.copy(this.localpos);
        this.worldpos.rotate(this.worldrot);
        this.worldpos.add(parent.worldpos);
        for (let child of this.children) {
            child.ForwardKinematics(this);
        }
    }
    from(x, y, theta) {
        this.localpos.from(x, y);
        this.localrot = theta;
    }
    translate(x, y) {
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