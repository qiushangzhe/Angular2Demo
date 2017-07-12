import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: ApiService, private router: Router, private userInfo: UserService) {

  }

  ngOnInit() {
  }

  loginClicked(username, password) {
    this.http.post('/user/login', {
      username: username.value,
      password: password.value
    }).subscribe( data => {
      if ( data.error.code !== 0 ) {
        console.log(data.error.errorMessage);
      }else {
        console.log(data.data);
        this.userInfo.username = data.data.username;
        this.userInfo.isLogin = true;
      }
    });
  }

  registClicked() {
    this.router.navigateByUrl('enter/registe');
  }

  test() {
    console.log(1);
    this.router.navigateByUrl('handle/administer');
  }
}
