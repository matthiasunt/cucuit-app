import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  public createCucu(cucu: any) {
    return this.http.post(`${this.baseUrl}/events`, cucu);
  }

  public getCucus() {

  }

  public getCucusByCoordsRange(coordsRange: any) {

  }
}
