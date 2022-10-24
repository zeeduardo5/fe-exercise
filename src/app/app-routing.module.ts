import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import('./modules/overview/overview.module').then(
            (m) => m.OverviewModule
          ),
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
