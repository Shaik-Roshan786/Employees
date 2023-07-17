import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path: 'updatedata', component: UpdateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  { path: 'table', component: TableComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
