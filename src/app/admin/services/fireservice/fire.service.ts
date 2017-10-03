import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { User } from '../../model/user';
import { Offer } from '../../model/offer';

import { AuthService } from '../auth-service/auth.service';
@Injectable()
export class FireService {

  constructor(private firebaseAuth: AngularFireAuth,private db: AngularFireDatabase, private router : Router, private authService : AuthService) { 

  }
  saveUsertoDatabase(value, user : User, done){
    firebase.database().ref("users/" + value.uid).set({
      email : user.email,
      type : "merchant",
      name : user.name
    }, error => {
      done(error);
    });
  }
  getUserDatabase(value){
    return this.db.object("users/" + value.uid);
  }
  getOffersList(){
    return this.db.list("offers"); 
  }
  getIntentionList(){
    return this.db.list("intentions");
  }
  getCategoryList(){
    return this.db.list("categorylist");
  }


  saveOffertoDatabase(offer : Offer){
    var value = {
      price : offer.price,
      discount : offer.discount,
      comment : offer.comment,
      category : offer.category,
      title : offer.title,
      creationDate : offer.creationDate,
      picture : offer.picture,
      userEmail : offer.userEmail
    }
    return this.db.list("offers").push(value);
  }
}
