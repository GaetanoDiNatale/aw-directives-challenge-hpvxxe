import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAgoPipe } from './time-ago.pipe';
import { SimpleUrlPipe } from './simple-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeAgoPipe,
    SimpleUrlPipe
  ],
  exports: [
    TimeAgoPipe,
    SimpleUrlPipe
  ]
})
export class SharedModule { }