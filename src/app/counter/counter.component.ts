import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
  ngOnInit() {}

  increment() {
    this.store.dispatch(new Increment());
    console.log(this.count$);
  }

  decrement() {
    this.store.dispatch(new Decrement());
    console.log(this.count$);
  }

  reset() {
    this.store.dispatch(new Reset());
    console.log(this.count$);
  }
}
