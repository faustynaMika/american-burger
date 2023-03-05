import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePagesComponent} from "./components/home-pages/home-pages.component";
import {MenuComponent} from "./components/menu/menu/menu.component";
import {ContactComponent} from "./components/contact/contact.component";
import {GaleryComponent} from "./components/galery/galery.component";
import {ErrorComponent} from "./components/error/error.component";
import {AdministrationComponent} from "./components/administration/administration.component";
import {AuthGuard} from "./shared/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'galery',
    component: GaleryComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
