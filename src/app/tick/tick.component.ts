import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css'],
})
export class TickComponent implements OnInit {
  @select() tick$: Observable<number>;
  tick?;

  constructor() {
    this.tick$.subscribe((tick) => {
      this.tick = tick;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
