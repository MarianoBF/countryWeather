import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';
import { filter, switchMap, tap } from 'rxjs/operators';

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
  borders: CountryResult[] = [];
  bordersForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: [{value:'', disabled: true}, Validators.required],
    borders: [{value:'', disabled: true}, Validators.required]
  })
  loading = false;

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
      this.bordersForm.get('borders')?.disable();
      this.bordersForm.get('country')?.reset('');
    }),
    switchMap( region => this.countriesService.getCountriesByRegion(region) )).subscribe( res => {
    this.countries = res;
    this.bordersForm.get('country')?.enable();
  })

  this.bordersForm.get('country')?.valueChanges
  .pipe(
    tap( _ => {
      this.borders = [];
      this.bordersForm.get('borders')?.reset('');
      this.bordersForm.get('borders')?.disable();
    }),
    filter(x=>x!=''),
    switchMap( code => this.countriesService.getCountryByID(code) ),
    switchMap( country => this.countriesService.getCountriesByCode(country?.borders!) ))
    .subscribe( res => {
    // this.borders = res;
    console.log("res", res)
    this.borders = res || [];
    this.bordersForm.get('borders')?.enable();
  })

}

  submit() {
    console.log(this.bordersForm.value);
  }
}
