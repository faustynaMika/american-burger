import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePagesComponent } from './components/home-pages/home-pages.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MenuComponent } from './components/menu/menu/menu.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ListComponent } from './components/menu/list/list.component';
import {MatListModule} from "@angular/material/list";
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ErrorComponent } from './components/error/error.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {GoogleMapsModule} from "@angular/google-maps";
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SigninComponent } from './components/signin/signin.component';
import {AuthService} from "./components/services/auth.service";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AdministrationComponent } from './components/administration/administration.component';

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
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
