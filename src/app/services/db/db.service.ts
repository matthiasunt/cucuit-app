import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cucu} from '../../models/cucu';
import {filter, find, map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = environment.apiUrl;

  private cucus$ = new BehaviorSubject<Cucu[]>([]);
  private pastCucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient,
              private translate: TranslateService) {
    this.fetchCucus(translate.currentLang);
    this.translate.onLangChange.subscribe((lang => this.fetchCucus(lang)));
  }

  get cucus() {
    return this.cucus$;
  }

  get pastCucus() {
    return this.pastCucus$;
  }

  public fetchCucus(lang: string) {
    const now = new Date();
    // Offset of 90 minutes
    now.setMinutes(now.getMinutes() - 90);

    const fromDate = new Date();
    fromDate.setMinutes(fromDate.getMinutes() - 60 * 24); // 24h in the past
    this.http.get(`${this.baseUrl}/cucus/after/${fromDate.toUTCString()}`)
      .subscribe((cucus: Cucu[]) => {
        const past = cucus.filter(c => new Date(c.startDate) < now)
          .sort((a, b) => {
            return a.startDate > b.startDate ?
              -1 : a.startDate < b.startDate ?
                1 : 0;
          });
        const upcoming = cucus.filter(c => new Date(c.startDate) >= now);
        this.pastCucus$.next(past);
        this.cucus$.next(upcoming);
        console.log(upcoming);
      });
  }

  public createCucu(cucu: Cucu) {
    return this.http.post(`${this.baseUrl}/cucus`, cucu).pipe(
      map(res => {
        this.fetchCucus(this.translate.currentLang);
        return res;
      })
    );
  }

  public getCucu(id: string): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}/cucus/${id}`).pipe(
      map((res: any) => {
        console.log(res);
        if (res && res._id) {
          return res;
        }
      })
    );
  }

  public uploadAvatar(file: File) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post(`${this.baseUrl}/images`, fd);
  }

  public getImageBaseUrl() {
    return `${this.baseUrl}/images`;
  }
}
