import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

//Model 
import { ProductModel } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // defind base url

  apiURL: string = "http://localhost:8081/ministock_restapi/public/api/"

  // defind header 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // อ่าน ข้อมูล production mทั้งหมด
  getProducts(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.apiURL + "products")
  }

  // การเพิ่มข้อมูลใหม่ (Method POST)
  createProduct(product): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiURL + 'products', JSON.stringify(product), this.httpOptions)
  }
}
