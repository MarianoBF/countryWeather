import { OnDestroy, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!: ElementRef;
  aMap!: mapboxgl.Map;
  zoom = 10;
  mapCenter: [number, number] = [-58.44343174820921, -34.62393414657647]

  constructor() { }

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxAccess;
    this.aMap = new mapboxgl.Map({
    container: this.divMap.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.mapCenter,
    zoom: this.zoom
    });

    this.aMap.on('zoom', (evt) => {
      this.zoom = this.aMap.getZoom();
    })

    this.aMap.on('zoomend', (evt) => {
      if (this.aMap.getZoom() > 18) {
        this.aMap.zoomTo(18)
      }})

    this.aMap.on('move', (evt) => {
      const target = evt.target;
      const { lng, lat } = target.getCenter();
      this.mapCenter = [lng, lat];
    })
  }
  
  ngOnDestroy(): void {
    this.aMap.off('zoom', () => {});
    this.aMap.off('zoomend', () => {});
    this.aMap.off('move', () => {});
  }

  changeZoom(value: string) {
    this.aMap.zoomTo(+value);

  }

  ZoomOut() {
    this.aMap.zoomOut();
  }

  ZoomIn() {
    this.aMap.zoomIn();
  }

}
