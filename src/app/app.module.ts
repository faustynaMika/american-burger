import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomePagesComponent} from './components/home-pages/home-pages.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MenuComponent} from './components/menu/menu/menu.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ListComponent} from './components/menu/list/list.component';
import {MatListModule} from "@angular/material/list";
import {ContactComponent} from './components/contact/contact.component';
import {GaleryComponent} from './components/galery/galery.component';
import {ErrorComponent} from './components/error/error.component';
import {FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {GoogleMapsModule} from "@angular/google-maps";
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {SigninComponent} from './components/signin/signin.component';
import {AuthService} from "./shared/services/auth.service";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AdministrationComponent} from './components/administration/administration.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {DayFormComponent} from './components/day-form/day-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DailyRecipesComponent} from './components/menu/daily-recipes/daily-recipes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomePagesComponent,
    MenuComponent,
    ListComponent,
    ContactComponent,
    GaleryComponent,
    ErrorComponent,
    GoogleMapComponent,
    SigninComponent,
    AdministrationComponent,
    DayFormComponent,
    DailyRecipesComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatListModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: momentAdapterFactory}),
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
