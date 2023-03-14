import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _httpClient: HttpClient) { }
  private url = 'http://localhost:3000/';
   headers = new HttpHeaders({
   
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });
  getLoginUser() { 
    return this._httpClient.get(this.url + "user/profile");
  }
  getUser(id:any) { 
    return this._httpClient.get(this.url + `user/${id}`);
  }
  updateUser(data:any) {
  return this._httpClient.patch(this.url + "user/update",data);
  }
  SocialLins(data:any) {
    return this._httpClient.patch(this.url + "user/update",{socialLinks:data});
    }
  addImage(data:any){
    return this._httpClient.patch(this.url+'user/update',data)
  }
}
