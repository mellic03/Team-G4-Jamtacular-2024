import System from "./system.js";
export default class sys_Audio extends System {
    constructor() {
        super();
        this.sounds = new Map();
    }
    preload() {
    }
    getSound(name) {
        return this.sounds.get(name);
    }
}
//# sourceMappingURL=sys-audio.js.map