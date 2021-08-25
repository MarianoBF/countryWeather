import { Component, OnInit } from '@angular/core';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  regions: string[] = [];
  activeRegion: string = '';
  results: CountryResult[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.regions = this.countriesService.getRegions();
  }

  setActive(region: string) {
    if (region !== this.activeRegion) {
      this.results = [];
      this.activeRegion = region;
      this.countriesService
        .getCountriesByRegion(region)
        .subscribe((res) => (this.results = res));
    }
  }
}
