import Actor from "../../engine/actor.js";
import Engine from "../../engine/engine.js";
import sys_Image from "../../engine/sys-image.js";


export default class Item extends Actor
{
    image_path: string;
    ore_strength: number; // time to harvest ore? measured in megapascals
    // spawn_chance: number; Spawn amount and rarity? idk how we are handling world gen

    constructor( x: number, y: number )
    {
        super(x, y);
    }

    draw( engine: Engine ): void
    {
        super.draw(engine);

        // const imageSys = engine.getSystem(sys_Image);
        // const img = imageSys.get(this.image_path);
        // image(img, this.x, this.y)
    }

}

