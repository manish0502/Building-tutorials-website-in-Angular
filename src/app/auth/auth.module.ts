import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  exports:[ 
    RegistrationComponent,
    LoginComponent
  ]
})
export class AuthModule { }
