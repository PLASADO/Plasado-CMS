import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../fireservice/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'app-offer-create-dialog',
  templateUrl: './offer-create-dialog.component.html',
  styleUrls: ['./offer-create-dialog.component.scss']
})
export class OfferCreateDialogComponent implements OnInit {
  categoryList = [];
  public form: FormGroup;
  url;
  uploadFile;

  dialogData = {
    title : null,
    price : null,
    discount : null,
    comment : null,
    imageUrl : null,
    category : null
  };

  dialogTitle : string = "Create Offer";
  constructor(public dialogRef: MdDialogRef<OfferCreateDialogComponent>,private authService : AuthService, private fb: FormBuilder, private db : AngularFireDatabase) {
    /*this.authService.getCateogyList().subscribe(categoryArray => {
      //this.categoryList = categoryArray;

    });*/


    //this.categoryList = ["Wedding Service","Job recommend","Job recommend Job recommend Job recommend"];
  }
  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      price: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000), CustomValidators.number])],
      discount: [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), CustomValidators.number])],
      comment: [null, Validators.compose([Validators.required])],
      category: [null,Validators.compose([Validators.required])]
    });

    this.form.controls["title"].setValue(null || this.dialogData["title"]);
    this.form.controls["price"].setValue(null || this.dialogData["price"]);
    this.form.controls["discount"].setValue(null || this.dialogData["discount"]);
    this.form.controls["comment"].setValue(null || this.dialogData["comment"]);
    this.form.controls["category"].setValue(null || this.dialogData["category"]);
    this.url = null || this.dialogData["imageUrl"];

    this.db.list("categorylist").subscribe(resultArray => {
      this.categoryList = resultArray;
    });
  }

  readUrl(event: any){
    if (event.target.files && event.target.files[0]){
      var reader = new FileReader();
      this.uploadFile = event.target.files[0];
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  initialize(value){
    this.dialogTitle = "Edit Offer";
    this.uploadFile = null;
    this.dialogData["title"] = value.title;
    this.dialogData["price"] = value.price;
    this.dialogData["discount"] = value.discount;
    this.dialogData["comment"] = value.comment;
    this.dialogData["imageUrl"] = value.imageUrl;
    this.dialogData["category"] = value.category;
  }

}
