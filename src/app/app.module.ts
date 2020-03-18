import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbDatepickerModule,
  NbButtonModule,
  NbIconModule, NbToastrService, NbContextMenuModule, NbMenuModule, NbMenuService
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './components/shared/footer/footer.component';
import {GtagModule} from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GtagModule.forRoot({
      trackingId: 'UA-160840865-1',
      trackPageviews: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({name: 'light-red'}),
    NbContextMenuModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    FontAwesomeModule,
    // NbWindowModule,
  ],
  providers: [
    NbMenuService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
