import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../../model/user';
@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,private db: AngularFireDatabase, private router : Router) { }
  currentUser : User;
  login(email : string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  signup(user : User){
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);    
  }
  loggedin(){
    return this.currentUser;
  }
}
