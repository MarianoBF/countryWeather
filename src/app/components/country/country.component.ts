import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-old',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  country: any;
  weather: any;
  code: string;
  isLoading: boolean;
  noWeather: boolean;
  noCountry: boolean;

  constructor(
    private WeatherService: WeatherService,
    private activatedRoute: ActivatedRoute
  ) {
    this.country = {};
    this.code = '';
    this.weather = {};
    this.isLoading = true;
    this.noWeather = false;
    this.noCountry = false;
  }

  ngOnInit(): void {}
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.code = params.country_code;
  //   });

  //   this.CountriesService.getCountryByCode(this.code)
  //     .then((res) => {
  //       this.country = { ...res };
  //       this.WeatherService.getWeatherForCountry(this.country.name)
  //         .then((res) => {
  //           console.log('res', res);
  //           this.weather = { ...res };
  //           this.isLoading = false;
  //         })
  //         .catch((error) => {
  //           console.log('error', error);

  //           this.noWeather = true;
  //           this.isLoading = false;
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.noCountry = true;
  //       this.isLoading = false;
  //     });
  // }
}
