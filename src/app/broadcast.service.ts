import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface broadCast {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})

export class BroadcastService {
  private readonly eventBus: BehaviorSubject<broadCast>;
  constructor() {
    this.eventBus = new BehaviorSubject<broadCast>({key: 'test', value: 'test'});
  }

  broadcast(key: string, value?: any) {
    this.eventBus.next({key, value});
  }
  on<T>(key: string): Observable<T> {
    return this.eventBus.asObservable().pipe(
      filter((event) => event.key === key),
      map((event) => event.value as T)
    );
  }

}
