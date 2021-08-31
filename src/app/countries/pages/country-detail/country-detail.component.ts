import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';
import { WeatherService } from '../../services/weather.service';
import { WeatherResults } from '../../interfaces/weather-results.interface';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


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
      console.log(this.countryData);
      const location: [number, number] = [this.countryData.latlng[1],this.countryData.latlng[0]];
      (mapboxgl as any).accessToken = environment.mapboxAccess;
      let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: location,
      zoom: 2
      });
      this.WeatherService.getWeatherForCountry(this.countryData.name).then(res => { 
        this.weatherData = res;
      })
    });


  
}
}
