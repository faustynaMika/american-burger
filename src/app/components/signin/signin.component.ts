import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}

  login() {
    console.log("START");
    this.authService.SignIn('coded.girl00@gmail.com', 'admin123');
    console.log("END")
  }
}
