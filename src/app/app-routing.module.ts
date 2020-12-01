import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './CommonComponents/page-not-found/page-not-found.component'
import { CourseListComponent } from './courses/course-list/course-list.component'
import { CourseDetailComponent } from './courses/course-detail/course-detail.component'
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component'
import {  PageComponent } from './staticpages/page/page.component'
import { BlockchainComponent } from './BannerButton/blockchain/blockchain.component';
import { TechNewsComponent } from './BannerButton/tech-news/tech-news.component'
import { RegistrationComponent }  from './auth/registration/registration.component'
import { LoginComponent } from './auth/login/login.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { PostComponent } from './admin/post/post.component'

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'course',component:CourseListComponent},
  {path:'course/:id',component:CourseDetailComponent},
  {path:'page/:slug', component:PageComponent},
  {path:'page', component:PageComponent},
  {path:'contact',component:ContactUsComponent},
  {path: 'blockchain', component:BlockchainComponent },
  {path: 'news' , component:TechNewsComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'login' , component:LoginComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'post' ,component:PostComponent},
  {path:'**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
