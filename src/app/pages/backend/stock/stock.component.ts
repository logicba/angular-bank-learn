import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../service/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(private api: ProductService, private route: Router) { }

  ///สร้างตัวแปรสำหรับ ผูกกับฟอมร์

  dataProducAdd = {
    "product_detail": "",
    "product_name": "",
    "product_barcode": "",
    "product_qty": "",
    "product_price": ""
  }

  ngOnInit(): void {
  }

  addStock() {
    //alert('ddd')
    this.api.createProduct(this.dataProducAdd).subscribe((data: {}) => {
      // console.log(typeof (data))
      // console.log(data)
      // console.log(data['status'])

      if (data['status'] == "success") {
        alert('success')
        this.route.navigate(["/backend"])
      } else {
        alert('fail')
      }
    })

    // this.api.getProducts().subscribe((data: {}) => {    })
  }

}
