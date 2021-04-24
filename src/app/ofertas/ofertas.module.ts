import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfferComponent } from './offer/offer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { PricesComponent } from './prices/prices.component';


@NgModule({
  declarations: [
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    ReactiveFormsModule
  ]
})
export class OfertasModule { }
