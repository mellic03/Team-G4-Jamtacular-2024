import Actor from "../engine/actor.js";
import { IO, KEYCODE } from "../engine/IO.js";
export default class Player extends Actor {
    constructor(x, y) {
        super(x, y, 0);
    }
    update(engine) {
        super.update(engine);
        if (IO.keyDown(KEYCODE.W)) {
            this.y -= 1;
        }
        if (IO.keyDown(KEYCODE.S)) {
            this.y += 1;
        }
        if (IO.keyDown(KEYCODE.D)) {
            this.x += 1;
        }
        if (IO.keyDown(KEYCODE.A)) {
            this.x -= 1;
        }
    }
    draw(engine) {
        fill(0, 255, 0);
        circle(this.x, this.y, 32);
    }
}
//# sourceMappingURL=player.js.map