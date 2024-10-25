import System from "./system.js";


export default class sys_Event extends System
{
    callbacks = new Map<string, Array<Function>>();

    constructor()
    {
        super();
    }

    on( msg: string, callback: Function ): void
    {
        if (this.callbacks.has(msg) == false)
        {
            this.callbacks.set(msg, new Array<Function>());
        }
    
        this.callbacks.get(msg).push(callback);
    }

    emit( msg: string, data: any ): void
    {
        if (this.callbacks.has(msg) == false)
        {
            console.log(`%c No such msg "${msg}"`, "background: grey; color: red;");
            return;
        }

        for (let callback of this.callbacks.get(msg))
        {
            callback(data);
        }
    }
}


