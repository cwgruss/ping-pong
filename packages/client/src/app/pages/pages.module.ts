import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LibModule } from 'lib';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [HomepageComponent],
  exports: [ HomepageComponent ]
})
export class PagesModule { }
