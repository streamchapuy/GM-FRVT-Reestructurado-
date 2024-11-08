import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterDataComponent } from './footer-data/footer-data.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterDataComponent,
    FooterLogoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
