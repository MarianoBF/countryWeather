import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/loading/loading.component';
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui.module';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-Ar');


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CountriesModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
