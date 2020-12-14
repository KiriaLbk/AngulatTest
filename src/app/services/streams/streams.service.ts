import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interval, timer, merge } from 'rxjs';
import { takeUntil, map, skipUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {
  // emit every 1  seconds
  first = interval(1000);
  // emit every 1.5  seconds
  second = interval(1500);
  // emit every 2 seconds
  third = interval(2000);


  fourth = new Observable( observer => {
    const firstStream = this.first.pipe(map((val) => ({id: val + 1, stream: 1}))).subscribe(val => {
      observer.next(val);
    });
    const secondStream = this.second.pipe(skipUntil(timer(10000)), map((val) => ({id: val + 1, stream: 2}))).subscribe(val => {
      observer.next(val);
    });
    const thirdStream = this.third.pipe(skipUntil(timer(20000)), map((val) => ({id: val + 1, stream: 3}))).subscribe(val => {
      observer.next(val);
    });
    return () => {
      firstStream.unsubscribe();
      secondStream.unsubscribe();
      thirdStream.unsubscribe();
    };
  }
  );

  num = 0;

  constructor() {}

  // count sum
  getSum(date): number {
    this.num += +date;
    return this.num;
  }

  // get fourth stream
  getObs(): Observable<any> {
    return this.fourth;
  }

}
