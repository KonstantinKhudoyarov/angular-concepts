import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-filter-textbox',
  styleUrls: ['./customers-list.component.scss'],
  template: 'Filter: <input type="text" class="filter-box">'
})

export class FilterTextboxComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
