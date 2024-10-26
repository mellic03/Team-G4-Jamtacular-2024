import Actor from "../engine/actor.js";
export default class Enemy extends Actor {
    constructor(x, y) {
        super(x, y, 0);
    }
    update(engine) {
        super.update(engine);
    }
    draw(engine) {
        fill(255, 0, 0);
        circle(this.x, this.y, 32);
    }
}
//# sourceMappingURL=enemy.js.map