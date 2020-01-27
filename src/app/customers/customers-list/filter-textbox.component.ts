import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-filter-textbox',
  styleUrls: ['./customers-list.component.scss'],
  template: 'Filter: <input type="text" class="filter-box" [(ngModel)]="filter">'
})

export class FilterTextboxComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();

  private _filter: string;

  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter);
  }

  get filter() {
    return this._filter;
  }

  constructor() {}

  ngOnInit() {}
}
