import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './countries/pages/country/country.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { CountryDetailComponent } from './countries/pages/country-detail/country-detail.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { FlagsComponent } from './countries/pages/flags/flags.component';
import { BordersComponent } from './countries/pages/borders/borders.component';

const routes: Routes = [
  {path: "", component: CountryComponent, pathMatch: 'full'},
  {path: "region", component: RegionComponent, pathMatch: 'full'},
  {path: "capital", component: CapitalComponent, pathMatch: 'full'},
  {path: "pais/:id", component: CountryDetailComponent, pathMatch: 'full'},
  {path: "banderas", component: FlagsComponent, pathMatch: 'full'},
  {path: "bordes", component: BordersComponent, pathMatch: 'full'},
  {path: "**", redirectTo: "/"}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
