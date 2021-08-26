import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.css']
})
export class FullMapComponent implements OnInit {

  constructor(private mapsSvc:MapsService) { }

  ngOnInit(): void {
    
  }

}
