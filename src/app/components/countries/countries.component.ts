import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: any[];
  selectedRegion: string;
  regionList: any[];

  constructor(
    private router: Router,
    private CountriesService: CountriesService
  ) {
    this.countries = [];
    this.selectedRegion = 'americas';
    this.regionList = [
      { id: 0, value: 'americas', name: 'América' },
      { id: 1, value: 'africa', name: 'África' },
      { id: 2, value: 'asia', name: 'Asia' },
      { id: 3, value: 'europe', name: 'Europa' },
      { id: 4, value: 'oceania', name: 'Oceanía' },
    ];
  }

  ngOnInit(): void {
    this.CountriesService.getCountriesByRegion(this.selectedRegion)
      .then((res) => (this.countries = [...res]))
      .catch((error) => console.log(error));
  }

  onClick(code: string) {
    this.router.navigate(['pais/' + [code]]);
  }

  changeRegion() {
    this.CountriesService.getCountriesByRegion(this.selectedRegion)
      .then((res) => (this.countries = [...res]))
      .catch((error) => console.log(error));
  }
}
