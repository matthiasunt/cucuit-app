import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Cucu} from '../../models/cucu';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = 'http://localhost:3200/api';

  private cucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient) {
    this.prefetchData();
  }

  get cucus() {
    return this.cucus$;
  }

  public createCucu(cucu: any) {
    return this.http.post(`${this.baseUrl}/events`, cucu);
  }

  private prefetchData() {
    this.http.get(`${this.baseUrl}/events`).subscribe((cucus: Cucu[]) => {
      this.cucus$.next(cucus);
    });
  }

  public getCucusByCoordsRange(coordsRange: any) {

  }
}
