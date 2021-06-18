import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://api.weatherstack.com/current?access_key=bb2788b908d5e87dce22bff14e59b153&query=';
  }
  getWeatherForCountry(country:string): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl+country).toPromise();
  }
}
