import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  baseAPIURL: string = "http://localhost:8081/ministock_restapi/public/api/"
  baseAPIURLImage: string = "http://localhost:8081/ministock_restapi/public/images/stock/"

  constructor() { }
}
