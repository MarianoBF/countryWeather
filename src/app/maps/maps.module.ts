import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinMapComponent } from './components/min-map/min-map.component';
import { FullMapComponent } from './components/full-map/full-map.component';
import { MarkersComponent } from './components/markers/markers.component';
import { ZoomComponent } from './components/zoom/zoom.component';
import { PropertiesComponent } from './components/properties/properties.component';



@NgModule({
  declarations: [
    MinMapComponent,
    FullMapComponent,
    MarkersComponent,
    ZoomComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapsModule { }
