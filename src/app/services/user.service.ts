import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    username: String = 'null';
    uuid: Number = -1;
    isLogin: boolean = false;
    constructor() {}
}
