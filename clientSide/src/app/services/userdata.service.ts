import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  user1 = new User();
  private dataSource = new BehaviorSubject(this.user1);
  currentdata = this.dataSource.asObservable();
  constructor() { }

  changedata(userdata: any) {
    this.dataSource.next(userdata)
  }

}
