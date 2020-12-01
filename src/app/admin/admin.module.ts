import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [DashboardComponent, PostComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    PostComponent
  ]
})
export class AdminModule { }
