import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';


@NgModule({
  imports: [],
  providers: [DataService]
})

export class CoreModule { }
