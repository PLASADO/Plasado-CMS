import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { User } from '../model/user';

import { AuthService } from '../services/auth-service/auth.service';
import { FireService } from '../services/fireservice/fire.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  messsageClass;
  message = '';
  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router, private fireService : FireService) { }

  ngOnInit( ) {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: [null, Validators.compose([Validators.required,CustomValidators.password])]
    });
    this.onSignin();
  }
  onSignin(){
    const user = {
      email : "paul@gmail.com",//this.form.get("email").value,
      password : "AAA123!!!"//this.form.get("password").value,
    };

    this.authService.login(user.email, user.password)
    .then( value => {
      //alert("Login Success");
      this.fireService.getUserDatabase(value).subscribe(
      value => {
        this.authService.currentUser = User.init(value);
        this.router.navigate(['/admin/offerlist']);
      },
      error => {
        //alert(error.message);
      });

    })
    .catch(err => {
      alert(err);
    });
  }

}
