import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { getListFirstItem } from './list-data';

@Injectable({
  providedIn: 'root'
})
export class ItemSelectService {

  private mySubject: BehaviorSubject<string>;

  constructor() {
    this.mySubject = new BehaviorSubject(getListFirstItem());
  }

  // Let anyone subscribe to, listen, changes. (event based architecture)
  public subscribe(next: (value: string) => void): void {
    this.mySubject.subscribe(next);
  }

  // Let anyone simply read the current value.
  public getValue(): string {
    return this.mySubject.getValue();
  }

  // Let anyone set a new value,
  // and inmediately trigger an event that everyone subscribed will hear
  public next(value: string): void {
    this.mySubject.next(value);
  }

}

