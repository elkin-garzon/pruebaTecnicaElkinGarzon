import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfferService } from './offer.service';
import { Offer } from './offer';

@Component({
	selector: 'app-offer',
	templateUrl: './offer.component.html',
	styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

	public formulario: FormGroup;
	public listOffers: any[] = [];
	public selectOffert: Offer = new Offer();
	public reload: boolean = false;

	constructor(
		public service: OfferService,
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			idOferta: ['', [Validators.required]],
		})
		this.selectData();


		this.getData();
	}

	/**
	 * mostrar datos
	 */
	getData() {
		this.service.getdata().subscribe((resp: any) => {
			this.listOffers = resp;
		});
	}

	selectData() {
		this.reload = false;
		this.formulario.controls['idOferta'].valueChanges.subscribe((resp: any) => {
			this.reload = true;
			this.selectOffert = this.listOffers.filter(offer => offer.id == resp)[0].versions[0];
		});
	}
}
