import {Pipe, PipeTransform} from '@angular/core';

import { Customer } from 'src/app/Shared/interfaces';

@Pipe({
  name: 'search'
})
export class FilterPIpe implements PipeTransform {
  transform(customers: Customer[], search = '') {
    if (!search.trim()) {
      return customers;
    }

    return customers.filter(customer => {
      return customer.name.toLowerCase().includes(search.toLowerCase()) ||
              customer.city.toLowerCase().includes(search.toLowerCase());
    });
  }
}
