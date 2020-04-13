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
  NbButtonModule,
  NbIconModule,
  NbContextMenuModule,
  NbMenuModule,
  NbToastrModule, NbDatepickerModule, NbDialogModule, NbCardModule, NbUserModule,
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FooterModule} from './components/shared/footer/footer.module';
import {CucuDetailEntryComponent} from './components/shared/cucu-detail/cucu-detail-entry.component';
import {CucuDetailComponent} from './components/shared/cucu-detail/cucu-detail.component';
import {CucuBoxModule} from './components/cucu-box/cucu-box.module';
import {DeviceDetectorModule} from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    CucuDetailEntryComponent,
    CucuDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalytics),
    NgxGoogleAnalyticsRouterModule,
    DeviceDetectorModule.forRoot(),
    NbThemeModule.forRoot({name: 'light-red'}),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbContextMenuModule,
    NbLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    FooterModule,
    NbCardModule,
    NbUserModule,
    CucuBoxModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
