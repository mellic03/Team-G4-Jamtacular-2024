import System from "./system.js";


export default class sys_Audio extends System
{
    sounds: Map<string, any>;

    constructor()
    {
        super();
        this.sounds = new Map<string, any>();
    }

    preload()
    {

    }

    getSound( name: string )
    {
        return this.sounds.get(name);
    }

}
