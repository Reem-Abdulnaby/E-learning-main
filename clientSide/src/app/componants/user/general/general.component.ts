import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  user = new User();
  file!: string;
  userform = new FormGroup({});
  constructor(private _user:UserService,private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userform=this.fb.group({
      name:[this.user.name,[,Validators.minLength(3),Validators.maxLength(25)]],
      mail: [this.user.mail, [Validators.required, Validators.email]],
      country:[this.user.country,[ Validators.minLength(3), Validators.maxLength(30)]],
      phone: [this.user.phone, [Validators.min(11),Validators.max(11) ]],
      birthdate: [this.user.birthdate],
      avatar: [this.user.avatar]
    })
    this.getuser();
    this.userform.patchValue({
      name: this.user.name, mail: this.user.mail,
      country: this.user.country, phone: this.user.phone,
      birthdate: this.user.birthdate, avatar: this.user.avatar
    });
  }
  isValidControl(name: string): boolean {
    return this.userform.controls[name].valid;
  }
  isInValidAndTouched(name: string): boolean {
    return this.userform.controls[name].invalid && (this.userform.controls[name].dirty || this.userform.controls[name].touched);
  }
  isControlHasError(name: string, error: string): boolean {
    return this.userform.controls[name].invalid && this.userform.controls[name].errors?.[error];
  }
  updateUser(): void {
    this.user =this.userform.value
    //////console.log(this.user);  
    this._user.updateUser(this.user).subscribe({
      next:(res:any)=>{
        this.addImage()
        this.getuser();
        // this.router.navigateByUrl('/user/dashBoard')
      }
    })
  }
  handelUpload(event:any){
    //////console.log(event)
    this.file=event.target.files
  }
  addImage(){
    if(this.file){
    const myData= new FormData()
    myData.append('avatar',this.file[0])
    this._user.addImage(myData).subscribe(()=>{})
  }
  }
  getuser() {
    this._user.getLoginUser().subscribe((res:any) => {
      this.user = res;
      //////console.log(this.user);
    },
      (error:any) => {
        //////console.log(error);
      });
  
  }
 
}
