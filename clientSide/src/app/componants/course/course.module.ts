import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';

import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
 import {MatTabsModule} from '@angular/material/tabs';
import { CourseContentComponent } from './course-content/course-content.component'; 
import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  // { path: '', component: CoursesComponent },
  { path: 'courseDetails/:cId', component: CourseDetailsComponent },
  {path:'courseContent/:id',component:CourseContentComponent},
  { path: ':name', component: CoursesComponent },
  // { path: 'courseContent', component: CourseContentComponent }
  
//     {path:'courseDetails/:cId',
//     children: [{ path: 'courseContent', component: CourseContentComponent }]
// },

]
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseContentComponent,
    
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatTabsModule,ReactiveFormsModule,SharedModule
  ]
})
export class CourseModule { }
