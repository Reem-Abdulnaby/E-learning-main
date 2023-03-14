import  Swal  from 'sweetalert2';
import { CoursesService } from './../../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page: number = 1;
  // count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];
  p: any = 1;
  result=false
  count: any = 2;
  course=new Course();
  constructor(private _course: CoursesService) { }
  courses!: Course[];
  value = '';
  ngOnInit(): void {
    this.getUserCourses();
    // this.deleteCourse("629e06e516f34840e26ca11e");
  }
  getUserCourses() {
    this._course.getUserCourses().subscribe(
      (res: any) => {
        this.courses = res;
        if(this.courses.length==0){
           this.result=true
        }
        // console.log(this.courses)
      }, (err: any) => { 
        //console.log(err)
      }
    )
  
  }
  deleteCourse(id: any) { 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
         this._course.deleteCourse(id).subscribe(
      (res: any) => {
        //console.log(res)
         this.getUserCourses();
      }, (err: any) => { 
        //console.log(err)
      }
    )
       }
      })
   
  }
}
