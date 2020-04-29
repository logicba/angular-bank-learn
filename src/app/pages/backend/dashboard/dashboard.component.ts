import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  typeChart: any
  dataChart: any
  optionsChart: any

  constructor() { }

  ngOnInit(): void {


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


  }
}
