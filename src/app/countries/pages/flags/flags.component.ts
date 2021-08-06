import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResult } from '../../interfaces/country-results.interface';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  results: CountryResult[] = [];

  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(res=>this.results = res);
  }

}
