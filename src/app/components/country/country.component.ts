import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  country: any;
  weather: any;
  code: string;
  load: boolean;

  constructor(
    private WeatherService: WeatherService,
    private CountriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.country = {};
    this.code = '';
    this.weather = {};
    this.load = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.code = params.country_code;
    });

    this.CountriesService.getCountryByCode(this.code)
      .then((res) => {
        this.country = { ...res };
        this.WeatherService.getWeatherForCountry(this.country.name)
          .then((res) => {
            this.weather = { ...res };
            this.load = true;
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }
}
