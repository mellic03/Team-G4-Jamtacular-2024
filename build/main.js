import Engine from "./engine/engine.js";
import Game from "./game/game.js";
const engine = new Engine(1024, 1024);
engine.addScene(new Game);
function preload() {
    engine.preload();
}
function setup() {
    engine.setup();
}
function draw() {
    engine.draw();
}
window.preload = preload;
window.setup = setup;
window.draw = draw;
//# sourceMappingURL=main.js.map