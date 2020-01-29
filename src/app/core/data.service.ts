import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer, Order } from '../Shared/interfaces';

@Injectable()
export class DataService {

  baseUrl = 'assets/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}customers.json`);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer[]>(`${this.baseUrl}customers.json`)
            .pipe(
              map(customers => {
                return customers.find((customer: Customer) => customer.id === id);
              })
            );
  }

  getOrders(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orders.json`)
            .pipe(
              map(orders => {
                return orders.filter((order: Order) => order.customerId === id);
              })
            );
  }

}
