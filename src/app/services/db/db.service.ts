import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, combineLatest, concat, forkJoin, zip} from 'rxjs';
import {Cucu} from '../../models/cucu';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  // private baseUrl = 'http://localhost:3200';
  private baseUrl = 'https://api.cucuit.com';

  private cucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient) {
    this.prefetchData();
  }

  get cucus() {
    return this.cucus$;
  }

  public createCucu(cucu: Cucu) {
    return zip(this.http.post(`${this.baseUrl}/cucus`, cucu), this.cucus$).pipe(
      map(([res, cucus]) => {
        // @ts-ignore
        if (res && res.topic) {
          // @ts-ignore
          this.cucus$.next([res].concat(cucus));
        }
        return res;
      })
    );
  }

  public uploadAvatar(file: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        // 'Accept': 'application/json'
      })
    };
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post(`${this.baseUrl}/images`, fd, httpOptions);
  }

  public getImageBaseUrl() {
    return `${this.baseUrl}/images`;
  }

  private prefetchData() {
    this.http.get(`${this.baseUrl}/cucus`).subscribe((cucus: Cucu[]) => {
      const sortedCucus = cucus.sort((a, b) => {
        const dateA = Date.parse(a.startDateString);
        const dateB = Date.parse(b.startDateString);
        return dateA - dateB;
      });
      this.cucus$.next(sortedCucus.slice(0, 15));
    });
  }

  public getCucusByCoordsRange(coordsRange: any) {

  }
}
