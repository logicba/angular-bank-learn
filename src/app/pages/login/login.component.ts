import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../service/user.service'

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

  // person = {
  //   'name': 'Thanachot',
  //   'email': 'Thanachot@attg.co.th',
  //   'age': 29,
  //   'gender': "male"
  // }

  /// Two way binding  // user ngmodel
  userData = {
    'username': '',
    'password': ''
  }

  userLogin = {
    'username': '',
    'fullname': '',
    'userstatus': ''
  }

  /// Play with angular reactive from
  loginForm: FormGroup
  submitted: boolean = false

  constructor(
    private auth: AuthService,
    private route: Router,
    private formBuilder: FormBuilder,
    private api: UserService
  ) { }

  ngOnInit(): void {
    // this.person.age = 30
    // this.message = "สวัสดีชาวโลก"

    //Validateion form
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required]],
    })


  }

  /// How to builid simple function
  submitLogin() {
    this.submitted = true
    if (this.loginForm.valid) {

      this.userData.username = this.loginForm.value.username
      this.userData.password = this.loginForm.value.password

      this.api.SignIn(this.userData).subscribe((data: {}) => {
        console.log(data['status'])
        if (data['status'] == 'success') {


          this.userLogin = {
            'username': this.loginForm.value.username,
            'fullname': data['fullname'],
            'userstatus': data['user_status']
          }

          // ส่งค่าไปเก็บไว้ใน localstorage
          // this.auth.sendToken(this.loginForm.value.username)
          this.auth.sendToken(this.userLogin)

          this.message = '<div class="alert alert-success" >login success</div>'
          // this.message = 'login success'
          this.route.navigate(["/backend"])


        } else {
          this.message = '<div class="alert alert-danger" >Login failed</div>'
          // this.message = 'Login failed'
        }
      })



    }
  }



}
