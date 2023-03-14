import { CoursesService } from 'src/app/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'ngx-owl-carousel-o';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { Course } from 'src/app/models/course';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userId:any;
  categories: any = []
  courses: Course[] = []
  stars=[1,2,3,4,5]
  constructor(private _user:UserService,private cat:CategoryService,private router:Router,private _course:CoursesService) { }
  getCat(){
    this.cat.getAllCat().subscribe((res)=>{
      this.categories=res
      //console.log(this.categories)
    },(error)=>{
      //console.log(error)
    })
  }
  searshByName(Name:string){
  this.cat.searchbyCat(Name).subscribe((res)=>{
    this.router.navigateByUrl("/courses/{{name}}")
     
  })
  }
  ngOnInit(): void {
    // //console.log(this.userId)
    this.getCat();
    this.getTop3Courses();
  }

  getTop3Courses() {
    this._course.getTopCourses().subscribe((res: any) => {
      this.courses = res
      //console.log(this.courses)
      //console.log("sss");
      
    
     }
      , (error:any) => { 

        //console.log(error);
        
      })
}
  enrollCourse(courseId: any) {   

  this._course.addusercourse(courseId).subscribe((res:any)=>{
    //console.log(res)
    this.router.navigateByUrl(`/courses/courseContent/${courseId}`)
  }, (err: any) => { 
    //console.log(err);
    
    //console.log(err.error.text)
    if (err.error.text == "COURSE ALREADY EXISTS !!") {
      //swall
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You already added this course',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to the Course',
       }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl(`/courses/courseContent/${courseId}`)
       }
      })
    }
  })
}
}
