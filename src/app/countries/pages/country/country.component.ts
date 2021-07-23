import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  results$: any;

  searchTerm: string = ""

  constructor(private countriesService: CountriesService) { }

  search(){
    console.log(this.searchTerm)
    this.results$ = this.countriesService.searchCountry(this.searchTerm)
  }

}
