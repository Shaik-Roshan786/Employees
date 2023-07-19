import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './chart/chart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';



const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {path:'employee',component:EmployeeComponent},
  {path: 'updatedata', component: UpdateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  { path: 'table', component: TableComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideosComponent },

  // { path: 'chart', component: ChartComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
