import { NgModule } from '@angular/core';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPIpe } from './pipes/filter.pipe';

@NgModule({
  declarations: [CapitalizePipe, FilterPIpe],
  exports: [CapitalizePipe, FilterPIpe]
})

export class SharedModule { }
