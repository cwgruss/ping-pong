import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [LibComponent, ButtonComponent],
  imports: [],
  exports: [LibComponent, ButtonComponent],
})
export class LibModule { }
