"use strict";

import { engine } from "./engine/engine.js";
import { EM } from "./engine/event/event.js";
import ExampleSystem from "./engine/examplesystem/examplesystem.js";
import Game from "./game/game.js";


engine.addSystem(new ExampleSystem);
engine.addSystem(new Game);


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

    fill(255, 0, 0);
    circle(500, 500, 250);

}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;

