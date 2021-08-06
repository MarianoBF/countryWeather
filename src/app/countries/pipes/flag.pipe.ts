import { Pipe, PipeTransform } from '@angular/core';
import { CountryResult } from '../interfaces/country-results.interface';

@Pipe({
  name: 'flag'
})
export class FlagPipe implements PipeTransform {

  transform(country:CountryResult): string {
    return country.flag;
  }

}
