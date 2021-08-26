import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent implements AfterViewInit {
  @ViewChild('map') divMap!: ElementRef;
  aMap!: mapboxgl.Map;
  zoom = 15;
  mapCenter: [number, number] = [-58.44343174820921, -34.62393414657647]
  markers: mapboxgl.Marker[] = [];

  constructor() { }
  

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxAccess;
    this.aMap = new mapboxgl.Map({
    container: this.divMap.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.mapCenter,
    zoom: this.zoom,
    });

    this.loadMarkers()


    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = "test test"

  }

  addMarker() {
    const rand1 = this.mapCenter[0] + Math.random() * 0.008;
    const rand2 = this.mapCenter[1] + Math.random() * 0.008;
    const newMarker = new mapboxgl.Marker({draggable: true, color: "red"}).setLngLat([rand1,rand2]).addTo(this.aMap);

    newMarker.on('dragend', () => {
      this.saveMarkers()
    })

    this.markers.push(newMarker)
    console.log(newMarker)
    this.saveMarkers()
  }

  goToMarker(marker: any) {
    console.log("flying")
    this.aMap.flyTo({center: marker.getLngLat()})
  }

  saveMarkers(){
    const marks = this.markers.map(item=>item.getLngLat())
    console.log(marks)
    localStorage.setItem("markers", JSON.stringify(marks))
  }

  loadMarkers(){
    if(!localStorage.getItem("markers")) {
      return;
    }
      const lnglat = JSON.parse(localStorage.getItem("markers")!)
    
      lnglat.forEach((item:[number, number]) => {
        const newMarker = new mapboxgl.Marker({draggable: true, color: "red"}).setLngLat(item).addTo(this.aMap);

        this.markers.push(newMarker)

        newMarker.on('dragend', () => {
          this.saveMarkers()
        })
      })
  }
  deleteMarker(i:number){
    this.markers[i].remove()
    this.markers.splice(i,1)
    this.saveMarkers()
  }
}
