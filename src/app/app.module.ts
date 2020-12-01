import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StaticpagesModule } from './staticpages/staticpages.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module'
import { AllModule } from './CommonComponents/all.module';
import {  AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BannerButton } from './BannerButton/bannerButton.module';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    BannerButton

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
