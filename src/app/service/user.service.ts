import { ConstantService } from './common/constant.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { UserModel } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // defind header 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  apiURL: string = this.constant.baseAPIURL

  constructor(private http: HttpClient, private constant: ConstantService) { }


  SignIn(data): Observable<UserModel> {
    
    return this.http.post<UserModel>(this.apiURL + "user/login", JSON.stringify(data), this.httpOptions)
  }
}
