import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PageComponent, ContactUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PageComponent,
    ContactUsComponent

  ]
})
export class StaticpagesModule { }
