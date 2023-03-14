import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars=[1,2,3,4,5]
  @Input() rate=0
  @Output() change=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    
  }

  onRatingChange(newRate:number){
    this.rate=newRate;
    this.change.emit(newRate)
  }

}
