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
  // results$: Observable<CountryResult[]> = of([]);
  searched: boolean = false;
  results: CountryResult[] = [];
  suggested: CountryResult[] = [];

  constructor(private countriesService: CountriesService) {}

  search(searchTerm: string) {
    this.searched = true;
    // this.results$ = this.countriesService.searchCountry(this.searchTerm);
    this.countriesService.searchCountry(searchTerm).subscribe(
      (resp) => {
        console.log("results",resp);
        this.results  = resp;
      },
      (err) => {
        console.log('Hubo un error', err);
      }
    );
  }

  suggest($event: string) {
    this.countriesService.searchCountry($event).subscribe(
      res => this.suggested = res.slice(0,7)
    )
  }
}
