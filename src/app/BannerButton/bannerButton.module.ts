import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainComponent } from '../BannerButton/blockchain/blockchain.component'
import { TechNewsComponent } from '../BannerButton/tech-news/tech-news.component'
import { WebDeVComponent } from '../BannerButton/web-de-v/web-de-v.component'

@NgModule({
  declarations: [
    BlockchainComponent,
    TechNewsComponent,
    WebDeVComponent
    
    ],

  imports: [
    CommonModule
  ],

  exports: [
    BlockchainComponent,
    TechNewsComponent,
    WebDeVComponent
  ]
})
export class BannerButton { }