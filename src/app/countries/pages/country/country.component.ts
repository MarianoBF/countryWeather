import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent {
  results$: Observable<CountryResult[]> = of([]);
  searchTerm: string = '';
  searched: boolean = false;

  constructor(private countriesService: CountriesService) {}

  search() {
    this.searched = true;
    console.log(this.searchTerm);
    this.results$ = this.countriesService.searchCountry(this.searchTerm);
    // this.countriesService.searchCountry(this.searchTerm).subscribe(
    //   (resp) => {
    //     console.log("results",resp);
    //   },
    //   (err) => {
    //     console.log('Hubo un error', err);
    //     this.error = true;
    //   }
    // );
  }
}
