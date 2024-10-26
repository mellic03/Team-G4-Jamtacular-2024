import {} from "p5/global";
import {} from "p5/lib/addons/p5.sound";
import Engine from "./engine/engine.js";
import Game from "./game/game.js";
import sys_Render from "./engine/sys-render.js";
import { math } from "./engine/math/math.js";


const engine = new Engine(1920, 1080);
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
    const ren = engine.getSystem(sys_Render);

    stroke(0);
    fill(0);
    textSize(24);
    text(`fps: ${ren.avgFPS()}`, 100, 100);
}


function mouseWheel( event )
{
    const ren = engine.getSystem(sys_Render);
    ren.scale -= 0.001 * event.delta;
    ren.scale = math.clamp(ren.scale, 0.05, 2.0);
}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;
window.mouseWheel    = mouseWheel;

