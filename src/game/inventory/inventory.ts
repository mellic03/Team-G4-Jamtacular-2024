export default class Inventory {

    copper: number = 0;
    iron: number = 0;
    nickel: number = 0;
    titanium: number = 0;
    zinc: number = 0;

    lastCollectionTime: number = 0;
    collectionCooldown: number = 0;


    // some weird bug with timing idek (wont collect ores for certain times or sm) (need to make it so after touching ore for x consecutive seconds it 'collects')

    constructor(){
        
    }

    collectOre(ore_type: string, ore_strength: number, breakingPower: number): void{

        this.collectionCooldown = (ore_strength / breakingPower) * 1000;

        if(millis() - this.lastCollectionTime >= this.collectionCooldown){
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
            this.lastCollectionTime = millis();
        }
    } 


    
}