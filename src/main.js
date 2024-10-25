import Engine from "./engine.js";
import ProjectileSystem from "./projectile.js";
import ExampleSystem from "./examplesystem/examplesystem.js";


const engine = new Engine;

engine.addSystem(new ProjectileSystem);
engine.addSystem(new ExampleSystem);


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
    background(0);

    fill(255, 0, 0);
    circle(500, 500, 250);
}


window.preload = preload;
window.setup   = setup;
window.draw    = draw;

