import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({id}) => this.countriesService.getCountryByID(id))
    ).subscribe(res => {
      console.log(res);
    });
  }
}
