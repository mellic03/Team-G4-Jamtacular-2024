import Scene from "../engine/scene.js";
import Enemy from "./enemy.js";
import Player from "./player.js";
export default class Game extends Scene {
    constructor() {
        super();
        this.player = new Player(-150, 0);
        this.addActor(this.player);
        this.addActor(new Enemy(+150, 0));
    }
    preload(engine) {
    }
    setup(engine) {
    }
    update(engine) {
        super.update(engine);
    }
}
//# sourceMappingURL=game.js.map