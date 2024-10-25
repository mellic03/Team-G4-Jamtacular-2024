import {} from "p5/global";
import {} from "p5/lib/addons/p5.sound";
import Engine from "./engine/engine.js";
import Game from "./game/game.js";


const engine = new Engine(512, 512);
const game   = new Game;


function preload()
{
    engine.preload();
    game.preload();
}


function setup()
{
    engine.setup();
    game.setup();
}


function draw()
{
    engine.draw();
    game.draw();
}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;

