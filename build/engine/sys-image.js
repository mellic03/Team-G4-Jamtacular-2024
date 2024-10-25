import System from "./system.js";
export default class sys_Image extends System {
    constructor() {
        super();
        this.cache = new Map();
    }
    preload() {
    }
    loadImg(path) {
        if (this.cache.has(path)) {
            return this.cache.get(path);
        }
        else {
            const img = loadImage(path);
            this.cache.set(path, img);
            return img;
        }
    }
}
//# sourceMappingURL=sys-image.js.map