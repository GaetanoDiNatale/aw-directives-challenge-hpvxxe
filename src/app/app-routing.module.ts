import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LinkListComponent } from './news/link-list/link-list.component';
import { CreateLinkComponent } from './submit/create-link/create-link.component';

const routes = [
  { path: '', component: LinkListComponent },
  { path: 'create', component: CreateLinkComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
] as Routes;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }