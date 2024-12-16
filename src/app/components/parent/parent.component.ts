import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { ICountries } from '../../model/countries.data';

@Component({
  selector: 'feature-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  countries: ICountries[] = [];

  counter = 0;

  lastClicked: string = '';

  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this._countriesService.fetchCountries().subscribe((res) => {
      this.countries = res;
    });
  }

  onCountryClick(countryCode: string) {
    this.counter++;
    this.lastClicked = countryCode;
  }
}
