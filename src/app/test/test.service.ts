import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class TestService {

  constructor() { }

  getData() {
    return of([
      {id: 1, name: 'udhay1'},
      {id: 2, name: 'udhay2'},
      {id: 4, name: 'udhay3'},
      {id: 5, name: 'udhay4'},
      {id: 6, name: 'udhay5'},
      {id: 7, name: 'udhay6'},
      {id: 8, name: 'udhay7'},
    ]);
  }

}
