import Engine from "./engine.js";
import ExampleSystem from "./examplesystem/examplesystem.js";
import { EM } from "./event/event.js";

const engine = new Engine;

engine.addSystem(new ExampleSystem);


function preload()
{
    engine.preload();
}


function setup()
{
    engine.setup();

    EM.on("test", () => { console.log("woot"); });
}


function draw()
{
    engine.draw();
    background(0);

    fill(255, 0, 0);
    circle(500, 500, 250);

}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;

