import {} from "p5/global";
import {} from "p5/lib/addons/p5.sound";
import Engine from "./engine/engine.js";
import Game from "./game/game.js";
import sys_Render from "./engine/sys-render.js";
import { math } from "./engine/math/math.js";


const engine = new Engine(1920, 1080);
const game   = new Game;
engine.addScene(game);


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

    stroke(255);
    fill(255);
    textSize(24);
    text(`fps: ${ren.avgFPS()}`, -300, -300);

    tint(255, 255, 255, 55);
    image(game.voronoi, -400, 0, 3000, 3000);

    tint(255, 255, 255, 220);
    fill(0, 50, 150, 155);
    // rect(-400, 0, 3000, 1000);
    image(game.gradient, -400, 0, 3000, 3000);

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

