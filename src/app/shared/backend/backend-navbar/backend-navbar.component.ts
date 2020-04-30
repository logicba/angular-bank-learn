import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-backend-navbar',
  templateUrl: './backend-navbar.component.html',
  styleUrls: ['./backend-navbar.component.scss']
})
export class BackendNavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  userLogin: object = this.auth.getUser()

  ngOnInit(): void {
    // console.log("777777777777777777")
    // console.log(this.userLogin['fullname'])
  }

  signout(){
    this.auth.logout()
  }

}
