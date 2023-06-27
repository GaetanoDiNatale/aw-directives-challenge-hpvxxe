import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateLinkComponent } from './create-link/create-link.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateLinkComponent
  ],
  exports: [
    CreateLinkComponent
  ]
})
export class SubmitModule { }