import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-prices',
	templateUrl: './prices.component.html',
	styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

	@Input() productOfferingPrices: Array<any>;

	constructor() { }

	ngOnInit(): void {
	}

}
