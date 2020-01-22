import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-filter-textbox',
  styleUrls: ['./customers-list.component.scss'],
  template: 'Filter: <input type="text" class="filter-box">'
})

export class FilterTextboxComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
