import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';


import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
]
@NgModule({
  declarations: [
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
