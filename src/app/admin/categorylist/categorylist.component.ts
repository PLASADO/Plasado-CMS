import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../fireservice/auth.service';
import * as firebase from 'firebase/app';
import { SharedService } from '../../layouts/shared-service';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CategorycreatedialogComponent } from './categorycreatedialog/categorycreatedialog.component';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  pageTitle: string = 'CategoryList';
  CategoryList = [];
  constructor(private db : AngularFireDatabase ,private _sharedService: SharedService, private authService : AuthService,public dialog: MdDialog) {
    _sharedService.emitChange(this.pageTitle);

  }

  ngOnInit() {
    // this.CategoryList = this.db.list("categorylist");
    //this.authService.getCategoryList()

    this.authService.getCategoryList((result) => {
      this.CategoryList = result;
    });
  }

  add(){
    let dialogRef = this.dialog.open(CategorycreatedialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel"){

      }
      else
      {
          this.db.list("categorylist").push(dialogRef.componentInstance.categorytitle);
      }
    });
  }
  remove(category){
    this.authService.removeCategory(category);
  }
}
