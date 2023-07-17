import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any[] = [];
  constructor(@Inject(DataService) private dataService: DataService) { }

  ngOnInit(): void {
    console.log('Table Component Initialized');
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

}
