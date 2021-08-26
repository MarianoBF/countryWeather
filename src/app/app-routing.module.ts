import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './countries/pages/country/country.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { CountryDetailComponent } from './countries/pages/country-detail/country-detail.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { FlagsComponent } from './countries/pages/flags/flags.component';
import { BordersComponent } from './countries/pages/borders/borders.component';
import { FullMapComponent } from './maps/components/full-map/full-map.component';
import { MinMapComponent } from './maps/components/min-map/min-map.component';
import { MarkersComponent } from './maps/components/markers/markers.component';
import { ZoomComponent } from './maps/components/zoom/zoom.component';
import { PropertiesComponent } from './maps/components/properties/properties.component';

const routes: Routes = [
  {path: "", component: CountryComponent, pathMatch: 'full'},
  {path: "region", component: RegionComponent, pathMatch: 'full'},
  {path: "capital", component: CapitalComponent, pathMatch: 'full'},
  {path: "pais/:id", component: CountryDetailComponent, pathMatch: 'full'},
  {path: "banderas", component: FlagsComponent, pathMatch: 'full'},
  {path: "bordes", component: BordersComponent, pathMatch: 'full'},
  {path: "**", redirectTo: "/"},
  {path: "/mapas/completo", component: FullMapComponent, pathMatch: 'full'},
  {path: "/mapas/mini", component: MinMapComponent, pathMatch: 'full'},
  {path: "/mapas/marcadores", component: MarkersComponent, pathMatch: 'full'},
  {path: "/mapas/zoom", component: ZoomComponent, pathMatch: 'full'},
  {path: "/mapas/propiedades", component: PropertiesComponent, pathMatch: 'full'},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
