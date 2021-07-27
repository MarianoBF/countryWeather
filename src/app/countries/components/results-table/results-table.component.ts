import { Component, Input, OnInit } from '@angular/core';
import { CountryResult } from '../../interfaces/country-results.interface';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input() results: CountryResult[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
