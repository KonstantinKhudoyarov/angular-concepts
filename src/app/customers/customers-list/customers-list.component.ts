import {Component, OnInit, Input} from '@angular/core';

import {Customer} from '../../Shared/interfaces';

@Component ({
  selector: 'app-customers-list',
  styleUrls: ['./customers-list.component.scss'],
  templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

  private _customers: Customer[] = [];

  @Input()
  set customers(value: Customer[]) {
    this.filteredCustomers = this._customers = value;
    this.calculateOrders();
  }

  get customers(): Customer[] {
    return this._customers;
  }

  filteredCustomers: Customer[] = [];
  customersOrderTotal: number;
  currencyCode = 'USD';

  constructor() {}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = this.filteredCustomers.reduce((acc, next) => {
      return acc + next.orderTotal;
    }, 0);
  }

  sort(prop: string) {
    console.log(prop);
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((customer: Customer) => {
        return customer.name.toLowerCase().includes(data) ||
             customer.city.toLowerCase().includes(data) ||
             customer.orderTotal.toString().includes(data);
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }
}
