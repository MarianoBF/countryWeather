import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryResult } from '../../interfaces/country-results.interface';
import { CountriesService } from '../../services/countries.service';
import { filter, switchMap, tap } from 'rxjs/operators';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { BorderForm } from '../../interfaces/forms.interface';

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
    country: [{ value: '', disabled: true }, Validators.required],
    borders: [{ value: '', disabled: true }, Validators.required]
  })
  loading = false;

  constructor(private countriesService: CountriesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regions = this.countriesService.getRegions();

    this.bordersForm.get('region')?.valueChanges.pipe(
      tap((_:any) => {
        this.bordersForm.get('borders')?.disable();
        this.bordersForm.get('country')?.reset();
      }),
      switchMap((region:string) => this.countriesService.getCountriesByRegion(region))).subscribe((res:any) => {
        this.countries = res;
        this.bordersForm.get('country')?.enable();
      })

    this.bordersForm.get('country')?.valueChanges
      .pipe(
        tap(_ => {
          this.borders = [];
          this.bordersForm.get('borders')?.reset();
          this.bordersForm.get('borders')?.disable();
        }),
        filter((x:any) => x != ''),
        switchMap((code:any) => this.countriesService.getCountryByID(code)),
        tap((country:any) => {
          console.log("tap country", country)
          const location: [number, number] = [country?.latlng[1] || 0, country?.latlng[0] || 0];
          (mapboxgl as any).accessToken = environment.mapboxAccess;
          let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: location,
            zoom: 4
          });
        }),
        switchMap((country:CountryResult) => this.countriesService.getCountriesByCode(country?.borders!)))
      .subscribe((res:any) => {
        this.borders = res || [];
        this.bordersForm.get('borders')?.enable();
      })

  }

  submit() {
    console.log(this.bordersForm.value);
  }
}
