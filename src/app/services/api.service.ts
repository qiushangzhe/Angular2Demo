import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, URLSearchParams, Response, Headers } from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
  private baseUrl: string = environment.url;
  private headers = new Headers({'Content-Type': 'application/json'});
  private autoCode: number = 8888;
  constructor(private http: Http , private userInfo: UserService) { };
  // 判断当前登陆态是否消失
  judgeUserStatus(data): void {
    if (data.error.code === this.autoCode) {
      this.userInfo.isLogin = false;
    }
  }
  // 公共post函数，可扩展
  post(url, data = {}) {
    const buffer = this.http.post(this.baseUrl + url, data, {headers: this.headers, withCredentials: true}).map(( value , index) => {
      const result = value.json();
      this.judgeUserStatus(result)
      return result;
    });
    return buffer;
  }
}
