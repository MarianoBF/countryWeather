import { Component, OnInit } from '@angular/core';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent implements OnInit {
  searched: boolean = false;
  results: CountryResult[] = [];
  suggested: CountryResult[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  search(searchTerm: string) {
    this.searched = true;
    this.countriesService.searchCountryByCapital(searchTerm).subscribe(
      (resp) => {
        console.log('results', resp);
        this.results = resp;
      },
      (err) => {
        console.log('Hubo un error', err);
      }
    );
  }

  suggest($event: string) {
    this.countriesService.searchCountryByCapital($event).subscribe(
      res => this.suggested = res.slice(0,7)
    )
  }
}
