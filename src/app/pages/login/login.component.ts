import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string = "hello angular"
  num: number = 100

  imgname = "login.jpg"
  imgname2 = "assets/logo/login.jpg"

  person = {
    'name': 'Thanachot',
    'email': 'Thanachot@attg.co.th',
    'age': 29,
    'gender': "male"
  }

  /// Two way binding
  userData = {
    'username': '',
    'password': ''
  }

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.person.age = 30
    this.message = "สวัสดีชาวโลก"

  }

  /// How to builid simple function

  submitLogin() {
    if (this.userData.username == 'admin' && this.userData.password == '1234') {
      // ส่งค่าไปเก็บไว้ใน localstorage
      this.auth.sendToken(this.userData.username)

      this.message = '<div class="alert alert-success" >login success</div>'
      // this.message = 'login success'
      this.route.navigate(["/backend"])


    } else {
      this.message = '<div class="alert alert-danger" >Login failed</div>'
      // this.message = 'Login failed'
    }
  }

}
