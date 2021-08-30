import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FlagPipe } from './pipes/flag.pipe';
import { FlagsComponent } from './pages/flags/flags.component';
import { MaterialUiModule } from '../material-ui.module';
import { BordersComponent } from './pages/borders/borders.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
    ResultsTableComponent,
    SearchInputComponent,
    FlagPipe,
    FlagsComponent,
    BordersComponent
  ],
  exports: [
      CapitalComponent,
      CountryComponent,
      RegionComponent,
      CountryDetailComponent
  ],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    FormsModule,
    MaterialUiModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
