import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=dbb813b9b0607467b6238f2c5c550e69&lang=es&q=';
  }
  getWeatherForCountry(country:string): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl+country).toPromise();
  }
}
