import Actor from "../engine/actor.js";
export default class Player extends Actor {
    constructor(x, y) {
        super(x, y, 0);
    }
    update(engine) {
        // Do whatever here
    }
    draw(engine) {
        fill(0, 255, 0);
        circle(this.transform.x, this.transform.y, 32);
    }
}
//# sourceMappingURL=player.js.map