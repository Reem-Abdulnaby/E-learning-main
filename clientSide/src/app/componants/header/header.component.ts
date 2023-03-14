import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { UserdataService } from 'src/app/services/userdata.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    userId:any;
    loguser=new User();
categories:any=[]
  constructor(private _auth:AuthService,private _user:UserService,private data:UserdataService,private cat:CategoryService) { }
  ngOnInit(): void {
      this.userId=localStorage.getItem('token');
      //console.log(this.userId)
       this.getuser();
       this.getCat()
    // this.usertoken();
  }
  subscription!: Subscription;

    getuser() {
    this._user.getLoginUser().subscribe(
      (res: any) => { 
         //console.log(res);  
         this.loguser=res;
       // this.loguser.mail = res.mail;
       // this.subscription = this.data.currentdata.subscribe(userinfo => this.loguser = userinfo)

      },
      (err: any) => { 
        //console.log(err);
      }
      );
    // return this.loguser;
    }
  
    getCat(){
      this.cat.getAllCat().subscribe((res:any)=>{
        this.categories=res
        //console.log(this.categories)
      },(error:any)=>{
        //console.log(error)
      })
    }
  
  usertoken() {
    return this._auth.getToken();
  }
}
