import {Component, OnInit} from '@angular/core';

import {Customer} from '../../Shared/interfaces';

@Component ({
  selector: 'app-customers-list',
  styleUrls: ['./customers-list.component.scss'],
  templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

  filteredCustomers: Customer[] = [
    {id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
    {id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    {id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2016, 5, 11)},
    {id: 4, name: 'Jim Andrews', city: 'New York', orderTotal: 59.99, customerSince: new Date(2018, 11, 25)},
    {id: 5, name: 'Sara Johnson', city: 'Miami', orderTotal: 89.99, customerSince: new Date(2019, 5, 15)}
  ];
  customersOrderTotal: number;

  constructor() {}

  ngOnInit() {
    this.calculateOrders();
  }

  calculateOrders() {
    this.customersOrderTotal = this.filteredCustomers.reduce((acc, next) => {
      return acc + next.orderTotal;
    }, 0);
  }

  sort(prop: string) {
    console.log(prop);
  }
}
