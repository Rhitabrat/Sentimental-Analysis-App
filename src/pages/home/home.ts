import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { Chart } from "chart.js";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  @ViewChild("barChart") barChart;
  @ViewChild("barChart1") barChart1;
  @ViewChild("barChart2") barChart2;

  bars: any;
  colorArray: any;

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(255, 204, 255)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    this.bars = new Chart(this.barChart1.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(255, 128, 0)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    this.bars = new Chart(this.barChart2.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(102, 204, 0)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
