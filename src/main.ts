import {} from "p5/global";
import {} from "p5/lib/addons/p5.sound";
import Engine from "./engine/engine.js";
import Game from "./game/game.js";


const engine = new Engine(800, 800);
engine.addScene(new Game);


function preload()
{
    engine.preload();
}


function setup()
{
    engine.setup();
}


function draw()
{
    engine.draw();
}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;

