import Engine from "../../engine/engine.js";
import Item from "./item.js";


export default class item_Titanium extends Item
{
    constructor( x: number, y: number )
    {
        super(x, y);
        this.image_path = "assets/img/titanium.png";
        this.ore_strength = 430;
    }

}

