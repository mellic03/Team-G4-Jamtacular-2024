import Engine from "../../engine/engine.js";
import Item from "./item.js";


export default class item_Zinc extends Item
{
    constructor( x: number, y: number )
    {
        super(x, y);
        this.image_path = "assets/img/zinc.png";
        this.ore_strength = 100;
    }

}

