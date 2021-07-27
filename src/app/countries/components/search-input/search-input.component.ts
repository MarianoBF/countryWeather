import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchTerm = "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.onEnter.emit( this.searchTerm )
  }
}
