export class Offer {
    public characteristics: Array<any>;
    public id: string;
    public name: string;
    public productOfferingPrices: Array<any>;

    constructor() {
        this.id = '';
        this.name = '';
        this.characteristics = [];
        this.productOfferingPrices = [];
    }
}
