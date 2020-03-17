import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Cucu} from '../../models/cucu';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private baseUrl = 'http://localhost:3200';
  // private baseUrl = 'https://api.cucuit.com';

  private cucus$ = new BehaviorSubject<Cucu[]>([]);

  constructor(private http: HttpClient) {
    this.prefetchData();
  }

  get cucus() {
    return this.cucus$;
  }

  public createCucu(cucu: any) {
    return this.http.post(`${this.baseUrl}/cucus`, cucu);
  }

  // Image Url: /upload/avatar/id

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

  public getImageDataUrl(imageId: string) {
    return `${this.baseUrl}/images${imageId}`;
  }

  private prefetchData() {
    this.http.get(`${this.baseUrl}/cucus`).subscribe((cucus: Cucu[]) => {
      this.cucus$.next(cucus);
    });
  }

  public getCucusByCoordsRange(coordsRange: any) {

  }
}
