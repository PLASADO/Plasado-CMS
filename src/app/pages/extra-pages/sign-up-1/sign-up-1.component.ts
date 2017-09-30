import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../../fireservice/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
@Component({
  selector: 'page-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']
})


export class PageSignUp1Component implements OnInit {
  public form: FormGroup;
  pageTitle: string = 'Form validation';
  constructor( private fb: FormBuilder ,private authService: AuthService, private router : Router,private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit(){
    this.authService.signup(this.form.get("email").value, this.form.get("password").value, this.form.get("fname").value + " " + this.form.get("lname").value )
    .catch( (err) => {
      alert("Signup failed : " + err.message );
    })
    .then(value => {

      console.log(value);
      firebase.database().ref("users/" + value.uid).set({
        email : this.form.get("email").value,
        password : this.form.get("password").value,
        name : this.form.get("fname").value + " " + this.form.get("lname").value,
        type : "merchant"
      });
      this.router.navigate(['/admin/userlist']);

    });

  }
}
