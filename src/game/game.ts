import Engine from "../engine/engine.js";
import { IO, KEYCODE } from "../engine/IO.js";
import Scene from "../engine/scene.js";
import sys_Audio from "../engine/sys-audio.js";
import sys_Image from "../engine/sys-image.js";
import Enemy from "./enemy.js";
import Player from "./player.js";
import item_Copper from "./item/copper.js";
import item_Iron from "./item/iron.js";
import item_Nickel from "./item/nickel.js";
import item_Titanium from "./item/titanium.js";
import item_Zinc from "./item/zinc.js";
import Inventory from "./inventory/inventory.js";


export default class Game extends Scene
{
    player: Player;
    inventory: Inventory;
    gradient;
    voronoi;

    constructor()
    {
        super();

    }

    preload( engine: Engine ): void
    {
        const img = engine.getSystem(sys_Image);
        img.load("assets/img/space-lq.png");
        img.load("assets/img/enemyImg.png");
        this.gradient = img.load("assets/img/gradient.png");
        this.voronoi = img.load("assets/img/voronoi.png");


        // ores
        img.load("assets/img/ore/zinc.png");
        img.load("assets/img/ore/copper.png");
        img.load("assets/img/ore/iron.png");
        img.load("assets/img/ore/nickel.png");
        img.load("assets/img/ore/titanium.png");
    }

    setup( engine: Engine ): void
    {
        this.player = new Player(-150, 0);
        this.addActor(this.player);
        this.addActor(new Enemy(+150, 0, 100, 5, "assets/img/enemyImg.png"));

        this.inventory = new Inventory();

        // temp ore spawn
        const imgSys = engine.getSystem(sys_Image);
        this.addActor(new item_Zinc(200, -16, imgSys.get("assets/img/ore/zinc.png")));
        this.addActor(new item_Copper(16, -16, imgSys.get("assets/img/ore/copper.png")));
        this.addActor(new item_Iron(32, -16, imgSys.get("assets/img/ore/iron.png")));
        this.addActor(new item_Nickel(64, -16, imgSys.get("assets/img/ore/nickel.png")));
        this.addActor(new item_Titanium(48, -16, imgSys.get("assets/img/ore/titanium.png")));

    }

    update( engine: Engine ): void
    {
        super.update(engine);

    }
}