import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, combineLatest, concat, forkJoin, zip} from 'rxjs';
import {Cucu} from '../../models/cucu';
import {map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = 'http://localhost:3200';
  // private baseUrl = 'https://api.cucuit.com';

  private cucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient,
              private translate: TranslateService) {
    this.fetchCucus(translate.currentLang);
    this.translate.onLangChange.subscribe((lang => this.fetchCucus(lang)));
  }

  get cucus() {
    return this.cucus$;
  }

  public fetchCucus(lang: string) {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 15);
    this.http.get(`${this.baseUrl}/cucus/after/${date.toUTCString()}`)
      .subscribe((cucus: Cucu[]) => {
        this.cucus$.next(cucus);
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

  public incrementClickCounter(id: string) {
    return this.http.get(`${this.baseUrl}/cucus/${id}/click`);
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
