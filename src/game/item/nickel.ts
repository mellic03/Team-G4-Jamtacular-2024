import Engine from "../../engine/engine.js";
import Item from "./item.js";


export default class item_Nickel extends Item
{
    constructor( x: number, y: number, image )
    {
        super(x, y, image);
        this.ore_strength = 300;
        this.ore_type = 'nickel';
    }

}

