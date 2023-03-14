import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  courseId:any;
  playlist:any[]=[];
  itemOne:any;
  info:any;
  videoPath="https://www.youtube.com/embed/"
  constructor(private _active:ActivatedRoute,private _course:CoursesService) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(params =>{
      this.courseId = params.get('id');
    })
    //console.log(this.courseId);
    this.getPlaylist();
  }
  getPlaylist(){
    this._course.getCoursePlaylist(this.courseId).subscribe((res:any)=>{
      //console.log(res);
      this.playlist=res.playlist;
      // //console.log(this.playlist)
      this.info=res;
      this.itemOne=this.playlist[0].link
      //console.log(this.itemOne)
      $('#myframe').attr("src",this.videoPath+this.itemOne)
    },(error)=>{
      //console.log(error)
    }
    )
  }
  changItem(item:any){
    this.itemOne=item;
    $('#myframe').attr("src",this.videoPath+this.itemOne)
  }
}
