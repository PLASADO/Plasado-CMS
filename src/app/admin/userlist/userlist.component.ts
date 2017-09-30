import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';
import { Router } from '@angular/router';
import { AuthService } from '../../fireservice/auth.service';
import { User } from '../../model/user';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {

    pageTitle : string = 'UserList';
    loadingIndicator : boolean = true;

    m_users : User[] = []
    m_tempUsers : User[] = []
    constructor(private db: AngularFireDatabase, private authService : AuthService,private _sharedService: SharedService) {
      this._sharedService.emitChange(this.pageTitle);

      this.authService.getUserList().subscribe( userArray => {
        userArray.forEach(userValue => {
          //if (userValue.)
          this.m_users.push(User.init(userValue));
          this.m_tempUsers.push(User.init(userValue));
        });
      });
    }
    ngOnInit(){
      
    }
  // pageTitle: string = 'UserList';
  // loadingIndicator: boolean = true;

  // users = [];
  // tempUsers = [];
  // total_Users : number = 0;
  // merchants : number = 0;
  // normalusers : number = 0;
  // constructor(private db: AngularFireDatabase, private authService : AuthService,private _sharedService: SharedService) {
  //   this._sharedService.emitChange(this.pageTitle);
  //   authService.getUserList().subscribe(userArray => {
  //     this.users = userArray;
  //     this.tempUsers = userArray;
  //     var count = 1;
  //     this.normalusers = 0;
  //     this.merchants = 0;
  //     this.total_Users = 0;
  //     var __this = this;
  //     this.users.forEach(function(value){
  //       value.no = count;
  //       count ++;
  //       if (value.type == "user"){
  //         __this.normalusers = __this.normalusers + 1;
  //       }
  //       if (value.type == "merchant"){
  //         __this.merchants = __this.merchants + 1;
  //         value.picture = "assets/content/merchant.png"
  //       }
  //       __this.total_Users = __this.total_Users + 1;
  //     });

  //     this.loadingIndicator = false;
  //   });
  // }
  // ngOnInit() {

  // }
  // onRemove(index : number){
  //   alert("remove " + index);
  //   this.authService.removeUser(this.users[index]);
  // }
  // updateFilter(event) {
  //   const val = event.target.value;

  //   if (val == ""){
  //     this.users = this.tempUsers;
  //   } else{
  //   // filter our data
  //     const temp = this.users.filter(function(d) {
  //       return d.email.toLowerCase().indexOf(val) !== -1 || !val;
  //     });
  //     this.users = temp;
  //   }
  //   // update the rows

  // }
}
