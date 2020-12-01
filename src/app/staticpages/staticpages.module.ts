import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [PageComponent, ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent,
    ContactUsComponent

  ]
})
export class StaticpagesModule { }
