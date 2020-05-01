import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {
  public scrollToCucus = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.scrollToCucus.subscribe(scroll => {
      if (scroll) {
        this.router.navigateByUrl('/#cucus');
      }
    });
  }


}
