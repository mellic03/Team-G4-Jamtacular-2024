export class GameState {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
    transition(to) {
        this.group.childTransition(this.name, to);
    }
}
export class GameStateManager {
    constructor() {
        this.states = new Map();
    }
    addState(state) {
        this.states.set(state.name, state);
    }
    getState(name) {
        return this.states.get(name);
    }
    childTransition(from, to) {
        // this.states.set(state.name, state);
    }
}
//# sourceMappingURL=gamestate.js.map