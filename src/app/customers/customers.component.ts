import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  title: string;
  people: any[];

  constructor() {}

  ngOnInit() {
    this.title = 'Customers';
    this.people = [
      {id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
      {id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      {id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2016, 5, 11)},
      {id: 4, name: 'Jim Andrews', city: 'New York', orderTotal: 59.99, customerSince: new Date(2018, 11, 25)},
      {id: 5, name: 'Sara Johnson', city: 'Miami', orderTotal: 89.99, customerSince: new Date(2019, 5, 15)}
    ];
  }
}
