import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardDetailComponent } from 'src/app/components/card-detail/card-detail.component';




@NgModule({
  declarations: [
    CardComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    CardDetailComponent
  ]
})
export class SharedModule { }
