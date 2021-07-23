import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ],
  exports: [
      CapitalComponent,
      CountryComponent,
      RegionComponent,
      CountryDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
