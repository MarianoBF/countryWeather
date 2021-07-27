import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent implements OnInit {

  countryData!: CountryResult;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({id}) => this.countriesService.getCountryByID(id)),
      tap(console.log)
    ).subscribe(res => {
      this.countryData = res;
    });
  }
}
