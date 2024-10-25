

class EventManager
{
    callbacks = new Map();

    constructor()
    {

    }

    on( msg, callback )
    {
        if (this.callbacks.has(msg) == false)
        {
            this.callbacks.set(msg, []);
        }

        this.callbacks.get(msg).push(callback);
    }

    emit( msg, data )
    {
        if (this.callbacks.has(msg) == false)
        {
            console.log("[event/event.js] Bruh wtf");
        }

        for (let callback of this.callbacks.get(msg))
        {
            callback(data);
        }
    }

}


export const EM = new EventManager();
