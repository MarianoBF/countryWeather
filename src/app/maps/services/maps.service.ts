import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  token = environment.mapboxAccess

  constructor() { 
    console.log("mbsvc", this.token)
  }
}
