import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import Scene from "../engine/scene.js";
import sys_Audio from "../engine/sys-audio.js";
import sys_Image from "../engine/sys-image.js";
import Enemy from "./enemy.js";
import Player from "./player.js";


export default class Game extends Scene
{
    player: Player;

    constructor()
    {
        super();

    }

    preload( engine: Engine ): void
    {
        const img = engine.getSystem(sys_Image);
        img.load("assets/img/space-lq.png");
        img.load("assets/img/blood-eye-lq.png");
    }

    setup( engine: Engine ): void
    {
        this.player = new Player(-150, 0);
        this.addActor(this.player);
        this.addActor(new Enemy(+150, 0));
    }

    update( engine: Engine ): void
    {
        super.update(engine);

    }
}

