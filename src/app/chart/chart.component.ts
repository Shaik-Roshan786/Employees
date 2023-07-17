import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  data: any[] = [];
  chart: any;

  constructor(@Inject(DataService) private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const labels = this.data.map((item) => item.name);
    const values = this.data.map((item) => item.value);

    this.chart = new Chart('chartCanvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data Values',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
