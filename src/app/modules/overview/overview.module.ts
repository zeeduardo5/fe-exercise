import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PaginationModule,
    OverviewRoutingModule
  ],
  providers : [
    DataService
  ]
})
export class OverviewModule { }
