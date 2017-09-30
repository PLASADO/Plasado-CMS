import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Upload } from '../model/upload';
@Injectable()

export class AuthService {

  user: Observable<firebase.User>;


  private basePath:string = '/images/offerimage';
  private uploadTask: firebase.storage.UploadTask;
  uploads: FirebaseListObservable<Upload[]>;


  constructor(private firebaseAuth: AngularFireAuth,private db: AngularFireDatabase, private router : Router) {
    this.user = firebaseAuth.authState;

  }
  getUserList(){
     return this.db.list('users');
  }
  getOfferList(category){
    return this.db.list('offers/' + category);
  }

  getCategoryList(cb){
    // return this.db.list('categorylist');

    var categoryList = this.db.list('categorylist');
    categoryList.subscribe(result => {
      cb(result);
    });
    /*categoryList.forEach(function(categoryArray){
      console.log(categoryArray);


    });*/
  }
  removeCategory(category){
    this.db.list('categorylist').remove(category.$key);
  }
  removeUser(user){
    this.db.list('users').remove(user);
  }
  removeOffer(offer){
    this.db.list('offers').remove(offer);
  }
  signup(email: string, password: string, name : string) {
      return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
      return firebase.auth().signInWithEmailAndPassword(email,password);
      //return this.firebaseAuth.auth.signInWithEmailAndPassword(email,password);

  }
  pushUpload(upload: Upload, cb) {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot : any) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
        cb( {status : false, message : error.message});
      },
      () => {
        // upload success
        upload = null;
        cb({status : true, url : this.uploadTask.snapshot.downloadURL, message : "Success"});
      }
    );
  }
  deleteUploadedFile(url){
    return firebase.storage().refFromURL(url).delete();
  }
  updateOffer(title : string, price : number, discount : number,comment : string,category : string, imageurl : string, key:string,date : string){
    return firebase.database().ref("offers/" + category + "/" + key).set({
      title : title,
      price : price,
      discount : discount,
      comment : comment,
      category : category,
      userEmail : this.firebaseAuth.auth.currentUser.email,//user
      creationDate : date,
      imageUrl : imageurl
    });
  }
  createOffer(title : string, price : number, discount : number,comment : string, category : string, imageurl : string){
    var date = new Date();
    var m = date.getMonth() + 1;
    var d = date.getDay() + 1;
    var y = date.getFullYear();

    return this.db.list("offers/" + category).push({
      title : title,
      price : price,
      discount : discount,
      comment : comment,
      category : category,
      userEmail : this.firebaseAuth.auth.currentUser.email,//user
      creationDate : m + "/" + d + "/" + y,
      imageUrl : imageurl
    });
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
