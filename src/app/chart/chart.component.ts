import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  employees: any[] = []; // Array to store fetched employee data
  ctx: any; // Canvas context
  config: any; // Chart configuration
  chartData: number[] = []; // Array to store chart data
  chartDatalabels: any[] = []; // Array to store chart labels

  ngOnInit() {
    this.ctx = document.getElementById('myChart'); // Get canvas element
    this.config = {
      type: 'bar',
      options: {},
      data: {
        labels: this.chartDatalabels, // Set chart labels
        datasets: [
          {
            label: "Chart Data",
            data: this.chartData, // Set chart data
            borderWidth: 10,
            backgroundColor: ['red', 'yellow', 'blue']
          }
        ]
      }
    };

    const myChart = new Chart(this.ctx, this.config); // Create new chart instance

    // Fetch data from the API and update the chart
    fetch("http://localhost:5000/employeer/employees", {
      method: 'get',
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(res => res.json()) // Convert response to JSON
      .then(result => {
        console.log(result); // Log the fetched result
        this.employees = result.employees; // Store fetched employee data

        console.log(this.employees); // Log the stored employee data

        // Update the chart data and labels based on the fetched data
        this.chartData = this.employees.map((employee: any) => employee.Salary); // Extract salaries from employee data
        this.chartDatalabels = this.employees.map((employee: any) => employee.Name); // Extract names from employee data

        myChart.data.labels = this.chartDatalabels; // Update chart labels
        myChart.data.datasets[0].data = this.chartData; // Update chart data
        myChart.update(); // Update the chart with new data
      })
      .catch(err => console.log(err)); // Log any errors that occur during the fetch request
  }
}
