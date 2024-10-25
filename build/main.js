import Engine from "./engine/engine.js";
import Game from "./game/game.js";
const engine = new Engine(512, 512);
const game = new Game;
function preload() {
    engine.preload();
    game.preload();
}
function setup() {
    engine.setup();
    game.setup();
}
function draw() {
    engine.draw();
    game.draw();
}
window.preload = preload;
window.setup = setup;
window.draw = draw;
//# sourceMappingURL=main.js.map