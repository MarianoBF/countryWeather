import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
    ResultsTableComponent,
    SearchInputComponent
  ],
  exports: [
      CapitalComponent,
      CountryComponent,
      RegionComponent,
      CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
