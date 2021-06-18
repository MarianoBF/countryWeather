import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[];

  constructor(    private WeatherService: WeatherService,
    private CountriesService: CountriesService) {    this.countries = [];
    }

  ngOnInit(): void {
    this.CountriesService.getCountriesAmericas()
    .then((res) => this.countries = [...res])
    .catch((error) => console.log(error));
  }

}
