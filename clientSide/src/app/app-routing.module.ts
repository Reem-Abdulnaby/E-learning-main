import { MainlayoutComponent } from './componants/mainlayout/mainlayout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './componants/notfound404/notfound404.component';

const routes: Routes = [
  {
    path: '', component: MainlayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      {
        path: 'home',
        loadChildren: () => import('./componants/main-home/main-home.module').then(m => m.MainHomeModule)
    
      },
      
     {
      path: 'courses',
      loadChildren: () => import('./componants/course/course.module').then(m => m.CourseModule)
      },
    
      {
        path: 'user', 
        loadChildren: () => import('./componants/user/user.module').then(m => m.UserModule)
      },
    
      {
        path: 'contact',
        loadChildren: () => import('./componants/contact/contact.module').then(m => m.ContactModule)
      },
      
    ]},

  { path: '**', component: Notfound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
