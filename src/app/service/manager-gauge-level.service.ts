import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ManagerGaugeLevelService {
  private pointSubject = new Subject<number>();
  public pointSubjectAsync = this.pointSubject.asObservable();
  interval: any;

  constructor() { }

  startManagerGaugeLevel(min: number, max: number): void {
    let index = min;
    const interval = 300; //1000;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (index <= max) {
        this.pointSubject.next(index);
        index = index + 1;
      } else {
        clearInterval(this.interval);
      }
    }, interval);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
