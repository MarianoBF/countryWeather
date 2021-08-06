import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CountryResult } from '../../interfaces/country-results.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() suggested: CountryResult[] = [];
  searchTerm = '';
  showSuggestions = false;
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onKeyPress: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value) => this.onKeyPress.emit(value));
  }
  search() {
    this.onEnter.emit(this.searchTerm);
  }
  keyPress() {
    this.showSuggestions = true;
    this.debouncer.next(this.searchTerm);
  }
  suggestionSearch() {
    this.search();
    this.showSuggestions = false;
  }

  selected($event: any) {
    console.log($event)
  }
}
