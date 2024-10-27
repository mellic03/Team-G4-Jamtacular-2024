import Engine from "../../engine/engine.js";
import Item from "./item.js";


export default class item_Copper extends Item
{
    constructor( x: number, y: number, image )
    {
        super(x, y, image);
        this.ore_strength = 210;
        this.ore_type = 'copper';
    }

}

