import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {

  sortProperty: string = null;
  sortDirection: number = 1;

  sort(collection: any[], prop: any) {
    this.sortProperty = prop;
    this.sortDirection = (this.sortProperty === prop) ? this.sortDirection * -1 : 1;

    collection.sort((a: any, b: any) => {
      const aValue: any = (this.isString(a[prop])) ? a[prop].trim().toLowerCase() : a[prop];
      const bValue: any = (this.isString(b[prop])) ? b[prop].trim().toLowerCase() : b[prop];

      if (aValue < bValue) {
        return this.sortDirection * 1;
      } else if (aValue > bValue) {
        return this.sortDirection * -1;
      } else {
        return 0;
      }

    });

  }

  private isString(val: any) {
    return val && (typeof val === 'string' || val instanceof String);
  }

}
