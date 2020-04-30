import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin = {
    'username': '',
    'fullname': '',
    'userstatus': ''
  }

  constructor(private myRoute: Router) { }

  // sendToken(token: string) {
  //   //บันทึกข้อมูลที่ได้ลง locla storage ของ html5 ไม่ควรเก็บข้อมูลที่เป็น ความลับ
  //   localStorage.setItem("LoggedInUser", token)
  // }

  sendToken(token: object) {
    //บันทึกข้อมูลที่ได้ลง locla storage ของ html5 ไม่ควรเก็บข้อมูลที่เป็น ความลับ
    localStorage.setItem("LoggedInUser", token['username'])
    localStorage.setItem("LoggedFullname", token['fullname'])
    localStorage.setItem("LoggedUserStatus", token['userstatus'])
  }

  getUser() {
    this.userLogin.username = localStorage.getItem("LoggedInUser")
    this.userLogin.fullname = localStorage.getItem("LoggedFullname")
    this.userLogin.userstatus = localStorage.getItem("LoggedUserStatus")
    return this.userLogin

  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn() {
    //console.log(this.getToken);
    return this.getToken() !== null
  }

  logout() {
    //localStorage.clear()
    localStorage.removeItem("LoggedInUser")
    this.myRoute.navigate(["/auth/login"]) // สามารถ  navigate ไปได้หลาย url
  }

}
