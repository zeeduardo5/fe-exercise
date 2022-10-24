import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


const overviewRoutes: Routes = [
  {
    path: '' ,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent },
      {
        path: '**',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(overviewRoutes)
  ],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
