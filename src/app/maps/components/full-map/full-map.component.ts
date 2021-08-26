import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.css']
})
export class FullMapComponent implements OnInit {

  constructor(private mapsSvc:MapsService) { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxAccess;
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-58.44343174820921, -34.62393414657647],
    zoom: 15
    });
  }



}
