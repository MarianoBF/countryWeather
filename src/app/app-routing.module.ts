import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FullMapComponent } from './maps/components/full-map/full-map.component';
// import { MinMapComponent } from './maps/components/min-map/min-map.component';
// import { MarkersComponent } from './maps/components/markers/markers.component';
// import { ZoomComponent } from './maps/components/zoom/zoom.component';
// import { PropertiesComponent } from './maps/components/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule)
  },
  // {path: "mapas/completo", component: FullMapComponent, pathMatch: 'full'},
  // {path: "mapas/mini", component: MinMapComponent, pathMatch: 'full'},
  // {path: "mapas/marcadores", component: MarkersComponent, pathMatch: 'full'},
  // {path: "mapas/zoom", component: ZoomComponent, pathMatch: 'full'},
  // {path: "mapas/propiedades", component: PropertiesComponent, pathMatch: 'full'},
  { path: "**", redirectTo: "/" },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
