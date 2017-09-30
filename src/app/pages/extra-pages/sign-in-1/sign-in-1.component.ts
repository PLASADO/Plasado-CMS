import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../../../fireservice/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
const password = new FormControl('', Validators.required);
@Component({
  selector: 'page-sign-in-1',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})


export class PageSignIn1Component implements OnInit {
  form: FormGroup;
  pageTitle: string = 'Form validation';
  user: Observable<firebase.User>;
  constructor( private fb: FormBuilder ,private firebaseAuth: AngularFireAuth,private authService: AuthService, private router : Router) {
     this.user = firebaseAuth.authState;
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password
    });
  }
  login() {
    this.authService.login(this.form.get("email").value, this.form.get("password").value)
    .then( value => {
        console.log(value);
        this.router.navigate(["/admin/userlist"]);
    })
    .catch((err) => {
      alert("Login failed : " + err.message );
    });
    this.form.setValue({email : "",password : ""});
  }
}
