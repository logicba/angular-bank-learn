import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    //บันทึกข้อมูลที่ได้ลง locla storage ของ html5 ไม่ควรเก็บข้อมูลที่เป็น ความลับ
    localStorage.setItem("LoggedInUser", token)


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
