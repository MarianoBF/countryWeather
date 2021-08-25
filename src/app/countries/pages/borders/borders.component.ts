import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.css']
})
export class BordersComponent implements OnInit {
  regions: string[] = [];
  activeRegion: string = '';
  results: CountryResult[] = [];
  countries: CountryResult[] = [];
  bordersForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required]
  })

  constructor(private countriesService: CountriesService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.regions = this.countriesService.getRegions();

  //   this.bordersForm.get('region')?.valueChanges.subscribe( region => {
  //     console.log(region);
  //     this.countriesService.getCountriesByRegion(region).subscribe( result => {
  //       this.countries = result;
  //       console.log(result)
  // })})

  this.bordersForm.get('region')?.valueChanges.pipe(
    tap( _ => {
      this.bordersForm.get('country')?.reset('');
    }),
    switchMap( region => this.countriesService.getCountriesByRegion(region) )).subscribe( res => {
    this.countries = res;
    console.log("res", res);
  })

}

  submit() {
    console.log(this.bordersForm.value);
  }
}
