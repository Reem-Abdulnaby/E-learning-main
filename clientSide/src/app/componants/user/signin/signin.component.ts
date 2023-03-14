import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private router: Router,private data:UserdataService) { }

  ngOnInit(): void {
    /*global $, document, window, setTimeout, navigator, console, location*/


  }
  user = new User();
  loginUser = new User();
  // message!:string;
  subscription!: Subscription;
  signupuser(name: string, email: string, password: string) {
    
    this.user.name = name;
    this.user.mail = email;
    this.user.password = password;
    console.log(this.user)
    this.subscription = this.data.currentdata.subscribe(userinfo => this.user = userinfo)

    this.auth.Signup(this.user).subscribe(
      (res: any) => { 
        Swal.fire(
          'Good job!',
          'registration successfull',
          'success'
        )
        localStorage.setItem('token',res.tokens)
      // console.log(res);
       localStorage.setItem('id',res._id)
       this.router.navigateByUrl('/home');


      }, (error: any) => { 
        console.log(error);
        // console.log(error.error.errors.message);
        
      for (const err in error.error.errors) {
      //   for (let i = 0; i < error.error.errors.length; i++) {
        // console.log(error.error.errors[err].message);
        Swal.fire(
          'Failed!',
          error.error.errors[err].message,
          'error'
        )
        }
      // }

      }
    )
  }

   loginuser( email: string, password: string) {
    
    this.user.mail = email;
    this.user.password = password;
    this.auth.login(this.user).subscribe(
      (res: any) => { 
      
        localStorage.setItem('token',res.tokens)
       // this.subscription = this.data.currentdata.subscribe(userinfo => this.user = userinfo)

      console.log(res);
     // localStorage.setItem('id',res._id)
             this.router.navigateByUrl('/home');


      }, (err: any) => { 
      console.log(err);

      }
    )
  }
}
