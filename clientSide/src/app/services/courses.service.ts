import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url:string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  headers = new HttpHeaders({
    'Authorization': 'Bearer '+localStorage.getItem('token')
  });
  addusercourse(id:any) {
    return this.http.post(this.url + 'user/AddCourse', {CourseID: id})
  }
  serchbycoursename() { 
    return this.http.get(this.url + 'user/SearchByCourseName/css', { headers: this.headers})
  }
  getTopCourses() {
    return this.http.get(this.url + 'course/topRate')
  }
  CourseDetails(id:string) {
    return this.http.get(this.url + 'user/SearchByCourseID/'+id)
  }
  getCoursePlaylist(id:any){
    return this.http.get(this.url+`user/SearchByCourseplaylist/${id}`)
  }
  getUserCourses() {
    return this.http.get(this.url + 'user/getallcourses')
  
  }
  deleteCourse(CourseID: any) {
    
    return this.http.delete(this.url + `user/deleteCourse/${ CourseID}`)
  }
}
