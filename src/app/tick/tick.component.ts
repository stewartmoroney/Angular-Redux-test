import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {

  @select() tick$: Observable<number>;

  constructor() {
    this.tick$.subscribe(tick => {
      this.tick = tick;
    });
  }

  tick = 0;

  ngOnInit(): void {
  }
}
