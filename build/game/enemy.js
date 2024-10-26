import Actor from "../engine/actor.js";
export default class Enemy extends Actor {
    constructor(x, y) {
        super(x, y, 0);
    }
    update(engine) {
        // Do whatever here
    }
    draw(engine) {
        fill(255, 0, 0);
        circle(this.transform.x, this.transform.y, 32);
    }
}
//# sourceMappingURL=enemy.js.map