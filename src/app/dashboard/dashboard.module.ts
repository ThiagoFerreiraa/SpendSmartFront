import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../globalComponents/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
