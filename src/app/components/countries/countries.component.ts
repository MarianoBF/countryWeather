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

  constructor(
    private router: Router,
    private CountriesService: CountriesService
  ) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.CountriesService.getCountriesAmericas()
      .then((res) => (this.countries = [...res]))
      .catch((error) => console.log(error));
  }

  onClick(code: string) {
    console.log(code);
    this.router.navigate(['pais/' + [code]]);
  }
}
