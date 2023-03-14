import { AvgRateComponent } from './../avg-rate/avg-rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';

@NgModule({
  declarations: [
    RatingComponent,
    AvgRateComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    RatingComponent,
    AvgRateComponent
  ]
})
export class SharedModule { 
}
