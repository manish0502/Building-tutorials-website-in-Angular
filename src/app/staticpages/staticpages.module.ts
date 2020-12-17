import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [PageComponent, ContactUsComponent, TeamComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PageComponent,
    ContactUsComponent,
    TeamComponent

  ]
})
export class StaticpagesModule { }
