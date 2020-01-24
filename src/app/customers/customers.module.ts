import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../Shared/shared.module';

import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [CommonModule, SharedModule],
  exports: [CustomersComponent]
})
export class CustomersModule { }
