import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registe',
  templateUrl: './registe.component.html',
  styleUrls: ['./registe.component.scss']
})
export class RegisteComponent implements OnInit {

  constructor(private http: ApiService, private router: Router) { }

  ngOnInit() {
  }

  backLoginClicked() {
    this.router.navigateByUrl('enter/login');
  }

  registClicked() {
    this.http.post('/user/registe').subscribe(function(data){
      if ( data.error.code !== 0) {
        alert('注册失败');
      } else {
        alert('注册成功');
        this.router.navigateByUrl('enter/login');
      }
    });
  }
}
