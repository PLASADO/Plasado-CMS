import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';
import { Router } from '@angular/router';
import { AuthService } from '../../fireservice/auth.service';
import { Upload } from '../../model/upload';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { OfferCreateDialogComponent } from './offer-create-dialog/offer-create-dialog.component';
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.scss']
})

export class OfferlistComponent implements OnInit {
  pageTitle: string = 'OfferList';
  offersArray = [];
  currentUpload: Upload;
  offerCount = 0;
  selectedEdition = -1;
  constructor(private authService : AuthService, private _sharedService: SharedService, public dialog: MdDialog, private db : AngularFireDatabase) {
    _sharedService.emitChange(this.pageTitle);
  }

  getOfferList(){
    this.offersArray = [];
    this.offerCount = 0;
    this.authService.getCategoryList(result => {

      var __this = this;
      result.forEach(function(value){
        __this.db.list("offers/" + value.$value).subscribe(resultArray => {
          __this.offersArray = __this.offersArray.concat(resultArray);
          __this.offerCount = 0;
          for (var i = 0;i < __this.offersArray.length;i ++){
            __this.offersArray[i].no = __this.offerCount + 1;
            __this.offerCount = __this.offerCount + 1;
          }

        });

      });

    });



  }
  ngOnInit() {
    this.getOfferList();
    console.log(this.offersArray);
  }
  onRemove(index : number){

    this.db.list("offers/" + this.offersArray[index].category + "/" + this.offersArray[index].$key).remove().catch().then(
      value =>{
        this.authService.deleteUploadedFile(this.offersArray[index].imageUrl);
        this.getOfferList();
      }
    );
  }
  onEdit(index : number){
    this.selectedEdition = index;
    let dialogRef = this.dialog.open(OfferCreateDialogComponent);
    dialogRef.componentInstance.initialize(this.offersArray[index]);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel"){

      } else{
        if (dialogRef.componentInstance.form.valid == true && dialogRef.componentInstance.dialogTitle == "Edit Offer" ){
          var url = this.offersArray[this.selectedEdition].imageUrl;
          if (dialogRef.componentInstance.url.includes("https://")){
            var title = dialogRef.componentInstance.form.controls["title"].value;
            var price = dialogRef.componentInstance.form.controls["price"].value;
            var discount = dialogRef.componentInstance.form.controls["discount"].value;
            var comment = dialogRef.componentInstance.form.controls["comment"].value;
            var category = dialogRef.componentInstance.form.controls["category"].value;
            var __this = this;
            __this.authService.updateOffer(title, price,discount,comment,category,__this.offersArray[__this.selectedEdition].imageUrl,__this.offersArray[__this.selectedEdition].$key,
            __this.offersArray[__this.selectedEdition].creationDate)
            .then(value => {
              __this.getOfferList();
            })
            .catch(err =>{

            });
          } else {
            var filename = dialogRef.componentInstance.form.controls["title"].value + String(new Date().getTime());
            var title = dialogRef.componentInstance.form.controls["title"].value;
            var price = dialogRef.componentInstance.form.controls["price"].value;
            var discount = dialogRef.componentInstance.form.controls["discount"].value;
            var comment = dialogRef.componentInstance.form.controls["comment"].value;
            var category = dialogRef.componentInstance.form.controls["category"].value;
            var uploadfile = dialogRef.componentInstance.uploadFile;
            this.authService.deleteUploadedFile(this.offersArray[this.selectedEdition].imageUrl)
            .then( value => {
              this.currentUpload = new Upload(uploadfile);
              if (this.currentUpload.file.type == "image/jpeg"){
                filename = filename + ".jpeg";
                this.currentUpload.name = filename;
              }

              if (this.currentUpload.file.type == "image/jpg"){
                filename = filename + ".jpg";
                this.currentUpload.name = filename;
              }
              if (this.currentUpload.file.type == "image/png"){
                filename = filename + ".png";
                this.currentUpload.name = filename;
              }




              setTimeout(() => { this.currentUpload = null; }, 1500);
              this.authService.pushUpload(this.currentUpload, (result) => {
                console.log(result);
                var __this = this;
                if (result.status == true){
                  var key = __this.offersArray[__this.selectedEdition].$key;
                  this.authService.updateOffer(title, price,discount,comment,category,result.url, key,this.offersArray[__this.selectedEdition].creationDate )
                  .then(value => {
                    __this.getOfferList();
                  })
                  .catch(err =>{

                  });

                }
              });
            })
            .catch(value => {
            });
          }
        }
      }
    });
  }
  openDialog(){
    let dialogRef = this.dialog.open(OfferCreateDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel"){

      }
      if (result == "submit"){
        if (dialogRef.componentInstance.form.valid == true && dialogRef.componentInstance.dialogTitle == "Create Offer" ){
          var filename = dialogRef.componentInstance.form.controls["title"].value + String(new Date().getTime());
          this.currentUpload = new Upload(dialogRef.componentInstance.uploadFile);
          if (this.currentUpload.file.type == "image/jpeg"){
            filename = filename + ".jpeg";
            this.currentUpload.name = filename;
          }

          if (this.currentUpload.file.type == "image/jpg"){
            filename = filename + ".jpg";
            this.currentUpload.name = filename;
          }
          if (this.currentUpload.file.type == "image/png"){
            filename = filename + ".png";
            this.currentUpload.name = filename;
          }
          var title = dialogRef.componentInstance.form.controls["title"].value;
          var price = dialogRef.componentInstance.form.controls["price"].value;
          var discount = dialogRef.componentInstance.form.controls["discount"].value;
          var comment = dialogRef.componentInstance.form.controls["comment"].value;
          var category = dialogRef.componentInstance.form.controls["category"].value;
          setTimeout(() => { this.currentUpload = null; }, 1500);
          var __this = this;
          __this.authService.pushUpload(__this.currentUpload, (result) => {
            console.log(result);

            if (result.status == true){
              __this.authService.createOffer(title, price,discount,comment, category.$value,result.url)
              .then(value => {
                __this.getOfferList();
              })
              .catch(err =>{

              });

            }
          });
        }
      }
    });
  }

}
