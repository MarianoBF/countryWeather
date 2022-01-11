import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './pages/country/country.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { RegionComponent } from './pages/region/region.component';
import { FlagsComponent } from './pages/flags/flags.component';
import { BordersComponent } from './pages/borders/borders.component';

const routes: Routes = [
    { path: "pais", component: CountryComponent, pathMatch: 'full' },
    { path: "region", component: RegionComponent, pathMatch: 'full' },
    { path: "capital", component: CapitalComponent, pathMatch: 'full' },
    { path: "pais/:id", component: CountryDetailComponent, pathMatch: 'full' },
    { path: "banderas", component: FlagsComponent, pathMatch: 'full' },
    { path: "bordes", component: BordersComponent, pathMatch: 'full' },
    { path: "", redirectTo: 'pais'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CountriesRoutingModule { }


