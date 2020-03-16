import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbDatepickerModule, NbButtonModule, NbWindowModule, NbWindowService} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CucuBoxComponent} from './components/cucu-box/cucu-box.component';
import {HowComponent} from './components/how/how.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NbThemeModule.forRoot({name: 'light-red'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    // NbWindowModule,
  ],
  providers: [
    // NbWindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
