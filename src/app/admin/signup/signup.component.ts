import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { CustomValidators } from 'ng2-validation';
import { User } from '../model/user';
import { FireService } from '../services/fireservice/fire.service';
import 'rxjs/add/operator/startWith';
const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  
  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router, private fireservice : FireService) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword
    });
  }
  onSignup(){
    var fname = this.form.get("fname").value;
    var lname = this.form.get("lname").value;
    var email = this.form.get("email").value;
    var password = this.form.get("password").value;

    var value = {
      name : fname + lname,
      email : email,
      password : password
    }
    var user = User.init(value);

    this.authService.signup(user)
    .then(value => {
      // this.router.navigate(['/admin/userlist']);
      this.fireservice.saveUsertoDatabase(value, user, error => {
        if (error) alert(error.mesage);
        else alert("Registered successfully");
      });
    })
    .catch(err => {
      alert("Signup failed : " + err.message );
    });
  }
}
