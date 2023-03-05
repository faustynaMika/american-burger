import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(public afAuth: AngularFireAuth,
              public router: Router,
              public ngZone: NgZone) {

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }

  get isLoggedIn(): boolean {
    let lsUser = localStorage.getItem('user');

    console.log(lsUser)

    if (lsUser == null) {
      return false;
    }

    const user = JSON.parse(lsUser);
    return (user !== null && user.emailVerified !== false);
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {

          if (user) {
            this.router.navigate(['administration']);
          }
        });
      });
  }
}
