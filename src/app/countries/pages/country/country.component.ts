import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  results$?: Observable<CountryResult[]>;

  searchTerm: string = ""

  constructor(private countriesService: CountriesService) { }

  search(){
    console.log(this.searchTerm)
    this.results$ = this.countriesService.searchCountry(this.searchTerm)
  }

}
