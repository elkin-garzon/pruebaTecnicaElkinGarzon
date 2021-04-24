import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-characteristics',
	templateUrl: './characteristics.component.html',
	styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

	@Input() characteristics: Array<any>;
	constructor() { }

	ngOnInit(): void {
	}

}
