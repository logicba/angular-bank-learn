import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core'
//import { ProductService } from '../../../service/product.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  typeChart: any
  dataChart: any
  optionsChart: any

  typeChart1: any;
  dataChart1: any;
  optionsChart1: any;

  // สร้างตัวแปร แบบว่างเพื่อรับข้อมูล 
  dataProduct: any = []

  constructor(private api: ProductService) { }

  ngOnInit(): void {

    ///Read api under on init

    this.api.getProducts().subscribe((data: {}) => {
      console.log(data)
      this.dataProduct = data

    })


    this.typeChart = "line"
    this.dataChart = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: " My stat",
          data: [10, 30, 50, 30, 40]
        }
      ]
    }
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    }

    this.typeChart1 = 'bar' // สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter   
    this.dataChart1 = {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Stock Summary Chart",
          data: [9, 7, 42, 30, 12, 10, 15, 61, 19, 3, 1, 9],
          backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12', '#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12', '#1abc9c', '#3498db']
        }
      ]
    }
    this.optionsChart1 = {
      responsive: true,
      maintainAspectRatio: false
    }







  }
}
