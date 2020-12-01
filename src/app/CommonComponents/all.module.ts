import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../CommonComponents/banner/banner.component'
import { FooterComponent } from '../CommonComponents/footer/footer.component';
import { HeaderComponent } from '../CommonComponents/header/header.component';
import { PageNotFoundComponent } from '../CommonComponents/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
      BannerComponent,
      FooterComponent,
      HeaderComponent,
      PageNotFoundComponent
    ],

  imports: [
    CommonModule
  ],

  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent

  ]
})
export class AllModule { }
