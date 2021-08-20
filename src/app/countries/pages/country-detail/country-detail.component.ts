import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';
import { WeatherService } from '../../../services/weather.service';
import { WeatherResults } from '../../interfaces/weather-results.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {

  countryData!: CountryResult;
  weatherData!: WeatherResults;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private WeatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.countriesService.getCountryByID(id)),
      tap(console.log)
    ).subscribe(res => {
      this.countryData = res;
      this.WeatherService.getWeatherForCountry(this.countryData.name).then(res => { 
        this.weatherData = res;
        console.log("weather", res) })
    });
    
  
}
}
