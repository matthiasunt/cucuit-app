import {Injectable} from '@angular/core';
import {CallProvider} from '../../models/call-provider';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallProvidersService {

  private callProviders$ = new BehaviorSubject<CallProvider[]>([]);

  constructor(private translateService: TranslateService) {
    this.updateCallProviderInfo();
    translateService.onLangChange.subscribe(() => {
      this.updateCallProviderInfo();
    });
  }

  get callProviders() {
    return this.callProviders$;
  }

  public getCallProvider(callLink: string): Observable<CallProvider> {
    if (callLink) {
      return this.callProviders$.pipe(
        map(providers => {
          if (callLink.includes('hangouts')) {
            return providers.find(s => s.url.includes('hangouts'));
          } else if (callLink.includes('skype')) {
            return providers.find(s => s.url.includes('skype'));
          } else if (callLink.includes('zoom')) {
            return providers.find(s => s.url.includes('zoom'));
          } else if (callLink.includes('jitsi')) {
            return providers.find(s => s.url.includes('jitsi'));
          }
        })
      );
    }
  }

  private updateCallProviderInfo() {
    this.translateService.get('postCucu.inviteUrl.PARTICIPANTS').subscribe(participants => {
      this.callProviders$.next([
        {
          name: 'Google Hangouts',
          tooltip: `Google Hangouts: 10 ${participants}`,
          imageUrl: './assets/images/hangouts.svg',
          url: 'https://hangouts.google.com',
        },
        {
          name: 'Skype',
          tooltip: `Skype: 50 ${participants}`,
          imageUrl: './assets/images/skype.svg',
          url: 'https://www.skype.com',
        },
        {
          name: 'Zoom',
          tooltip: `Zoom: 100 ${participants}`,
          imageUrl: './assets/images/zoom.png',
          url: 'https://zoom.us/signup',
        },
        {
          name: 'Jitsi Meet',
          tooltip: `Jitsi Meet: 25 ${participants}`,
          imageUrl: './assets/images/jitsi.svg',
          url: 'https://meet.jit.si',
        }
      ]);
    });
  }

}
