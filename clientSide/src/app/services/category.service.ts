import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }

  getAllCat(){

    return this.http.get(this.url+"getAllCategoreies")
  }
  searchbyCat(name:string){
    return this.http.get(this.url+`courses/SearchByCourseCat/${name}`)
  }
}
