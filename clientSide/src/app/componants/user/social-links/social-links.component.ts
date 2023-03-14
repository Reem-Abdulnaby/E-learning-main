import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor(private _user:UserService,private FB:FormBuilder) { }
  user = new User();
  loginUser=new User();
  social:any = [];
  socialLinks = new FormGroup({});
  ngOnInit(): void {
    this.socialLinks = this.FB.group({
      Twitter:[],
      Facebook: [],
      Google: [],
      LinkedIn: [],
      GitHub: [],
  

    })
    this.getuser();
  }
  addSocialLinks(data:any) {
    this.user.socialLinks[0].Twitter = data.Twitter;
    this.user.socialLinks[1].Facebook = data.Facebook;
    this.user.socialLinks[2].Google = data.Google;
    this.user.socialLinks[3].LinkedIn = data.LinkedIn;
    this.user.socialLinks[4].GitHub = data.GitHub;
    //console.log(this.user.socialLinks);
    
    this._user.SocialLins(this.user.socialLinks).subscribe(
      (res: any) => {
        // this.user.socialLinks = res.socialLinks;
        //console.log(res)
        // //console.log(this.user.socialLinks);
        
      }, (err: any) => { 
        //console.log(err)
      }
    )
  
  }
  getuser() {
    this._user.getLoginUser().subscribe((res:any) => {
      this.loginUser.socialLinks = res.socialLinks;
      //console.log(this.loginUser.socialLinks);
    },
      (error:any) => {
        //console.log(error);
      });
  
}
}
