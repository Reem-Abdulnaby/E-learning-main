import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avg-rate',
  templateUrl: './avg-rate.component.html',
  styleUrls: ['./avg-rate.component.css']
})
export class AvgRateComponent implements OnInit {
  stars = [1, 2, 3, 4, 5]
  @Input() rate = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
