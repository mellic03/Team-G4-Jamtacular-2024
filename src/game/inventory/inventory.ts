import Engine from "../../engine/engine";

export default class Inventory {

    copper: number = 0;
    iron: number = 0;
    nickel: number = 0;
    titanium: number = 0;
    zinc: number = 0;

    constructor(){
        
    }

    collectOre(ore_type: string, ore_strength: number): void{
        switch (ore_type) {
            case 'copper':
                this.copper += 1;
                console.log(ore_type + ":" + this.copper);
                break;
            case 'iron':
                this.iron += 1;
                console.log(ore_type + ":" + this.iron);
                break;
            case 'nickel':
                this.nickel += 1;
                console.log(ore_type + ":" + this.nickel);
                break;
            case 'titanium':
                this.titanium += 1;
                console.log(ore_type + ":" + this.titanium);
                break;
            case 'zinc':
                this.zinc += 1;
                console.log(ore_type + ":" + this.zinc);
                break;
        }
    } 

    
}