

class GameStateManager
{
    states = [];
    active = new Set();

    constructor()
    {

    }

    getState( name )
    {
        return this.states[name];
    }

    makeActive( name )
    {
        this.active.set(name, this.states[name]);
    }

    makeInactive( name )
    {
        this.active.delete(name);
    }

    transition( from, to )
    {
        const A = this.getState(from);
        const B = this.getState(to);

        A.exit(B);
        B.enter(A);

        makeInactive(from);
        makeActive(to);
    }

}



export class GameState
{
    parent;

    constructor( group )
    {
        this.parent = group;
    }

    transition( to )
    {
        this.parent.transition(this.name, to);
    }

    enter( from )
    {

    }

    exit( to )
    {

    }

    update()
    {
        
    }

}



export const StateManager = new GameStateManager();
