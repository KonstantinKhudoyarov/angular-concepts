import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { Customer, Order, OrderItem } from '../Shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.scss' ]
})
export class OrdersComponent implements OnInit {

  orders: OrderItem[] = [];
  customer: Customer;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((orders: OrderItem[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: Customer) => {
      this.customer = customer;
    });

    this.dataService.getOrders(id)
      .subscribe(orders => console.log(orders));
  }

}
