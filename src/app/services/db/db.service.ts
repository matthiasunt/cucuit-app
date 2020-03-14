import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = 'http://localhost:3000/api';

  constructor() {
  }

  public getCucus() {

  }

  public getCucusByCoordsRange(coordsRange: any) {

  }
}
