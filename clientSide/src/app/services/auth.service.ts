import { HttpInterceptor, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }
getToken(){
    return localStorage.getItem('token')
  }
  Signup(data: any) {
    return this.http.post(this.url + 'user/signup', data)
   }
  login(data: any) {
    return this.http.post(this.url+'user/login', data)    
 }
 logout(){
   return this.http.delete(this.url+"user/logout")
 }
}
