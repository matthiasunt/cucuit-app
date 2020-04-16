import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Cucu} from '../../models/cucu';
import {filter, find, map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';
import {DeviceDetectorService} from 'ngx-device-detector';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = environment.apiUrl;

  private cucus$ = new BehaviorSubject<Cucu[]>([]);
  private pastCucus$ = new BehaviorSubject<Cucu[]>([]);

  private userCucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient,
              private translate: TranslateService,
              private userService: UserService,
  ) {
    this.fetchCucus(translate.currentLang);
    this.translate.onLangChange.subscribe((lang => this.fetchCucus(lang)));
  }

  get cucus() {
    return this.cucus$;
  }

  get pastCucus() {
    return this.pastCucus$;
  }

  get userCucus() {
    return this.userCucus$;
  }

  public createdbyUser(cucu$: Observable<Cucu>): Observable<boolean> {
    return combineLatest([this.userCucus$, cucu$])
      .pipe(
        map(([userCucus, cucu]) => {
          const found = userCucus.find(c => c._id === cucu._id);
          if (found && found._id) {
            return true;
          } else {
            return false;
          }
        }));
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
      });
    this.http.get(`${this.baseUrl}/cucus/by/${this.userService.getUid()}`)
      .subscribe((userCucus: Cucu[]) => {
        this.userCucus$.next(userCucus);
      });
  }

  public createCucu(cucu: Cucu) {
    const uid = this.userService.getUid();
    if (uid) {
      cucu.uid = uid;
      return this.http.post(`${this.baseUrl}/cucus`, cucu).pipe(
        map(res => {
          this.fetchCucus(this.translate.currentLang);
          return res;
        })
      );
    } else {
      console.error('Uid not defined!');
      return null;
    }
  }

  public deleteCucu(id: string) {
    const uid = this.userService.getUid();
    if (uid) {
      const res = this.http.post(`${this.baseUrl}/cucus/delete-one`, {_id: id, uid});
      this.fetchCucus(this.translate.currentLang);
      return res;
    } else {
      console.error('Uid not defined!');
      return null;
    }
  }

  public getCucu(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cucus/${id}`).pipe(
      map((res: any) => {
        if (res && res._id) {
          return res;
        }
      })
    );
  }

  public cucuClicked(id: string) {
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
