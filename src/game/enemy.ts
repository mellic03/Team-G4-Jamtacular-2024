import Actor from "../engine/actor.js";
import Engine from "../engine/engine.js";
import sys_Event from "../engine/sys-event.js";
import sys_Image from "../engine/sys-image.js";
import Game from "./game.js";


export default class Enemy extends Actor
{

    constructor( x: number, y: number )
    {
        super(x, y, 0);
    }

    update( engine: Engine )
    {
        super.update(engine);

        const gameScene = engine.getScene(Game);

        let Player = gameScene.player.pos;
        this.moveTo(Player);

    }

    draw( engine: Engine )
    {
        // fill(255, 0, 0);
        const imgSys = engine.getSystem(sys_Image);
        const enemyImg = imgSys.get('assets/img/enemyImg.png');
        image(enemyImg, this.x, this.y);
    }

}

