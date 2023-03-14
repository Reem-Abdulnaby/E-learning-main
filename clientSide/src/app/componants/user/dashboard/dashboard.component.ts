import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=new User();
  constructor( private router: Router,private service:AuthService,private _user:UserService) { }

  ngOnInit(): void {
    this.getuser();
  }
  logout(){
    this.service.logout().subscribe((res:any)=>{
      //console.log("done")
      localStorage.removeItem('token');
      this.router.navigateByUrl('/user/signin');

    },
    (error:any)=>{
      //console.log(error)
    })
    


   
  
  }
  getuser() {
    this._user.getLoginUser().subscribe((res:any) => {
      this.user = res;
      //console.log(this.user);
    },
      (error:any) => {
        //console.log(error);
      });
  
}
}
