
export default class Engine
{
    systems = []

    constructor()
    {
        
    }

    addSystem( system )
    {
        this.systems.push(system);
    }


    preload()
    {
        for (let system of this.systems)
        {
            system.preload()
        }
    }
    
    
    setup()
    {
        createCanvas(1024, 1024);

        for (let system of this.systems)
        {
            system.setup()
        }
    }
    
    
    draw()
    {
        background(0);

        for (let system of this.systems)
        {
            system.draw()
        }
    }
    
}