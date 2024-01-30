import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder= "Name / City / State / ID" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of filteredLocationList" 
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    const filteredByName = this.housingLocationList.filter( housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase()));
    const filteredByCity = this.housingLocationList.filter( housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
    const filteredByState = this.housingLocationList.filter( housingLocation => housingLocation?.state.toLowerCase().includes(text.toLowerCase()));
    const filteredByID = this.housingLocationList.filter( housingLocation => housingLocation?.id.toLowerCase().includes(text.toLowerCase()));
    this.filteredLocationList = [...filteredByName, ...filteredByCity, ...filteredByState, ...filteredByID];
  }
}
