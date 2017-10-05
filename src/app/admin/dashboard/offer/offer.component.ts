import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { OfferdialogComponent } from './offerdialog/offerdialog.component';
import { Offer } from '../../model/offer';

import { FireService } from '../../services/fireservice/fire.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent implements OnInit {

  @ViewChild('datatable') table;
  offerlist : Offer[] = [];
  loadingIndicator = true;
  constructor(
    private fireservice : FireService, 
    private authservice : AuthService,
    public dialog: MdDialog,private zone:NgZone) { 
  }
  
  ngOnInit() {
    this.fireservice.getOffersList().subscribe(refList => {
      var index = 0;
      refList.forEach(value => {
        var offer = Offer.initialize(value);
        offer.no = index = index + 1;
        this.offerlist.push(offer);
      });
      this.offerlist = this.offerlist.slice();
    });
  }
  openDialog(){
    let dialogRef = this.dialog.open(OfferdialogComponent, {
      panelClass: 'col-md-3'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel"){
      }
      if (result == "submit"){
        var form = dialogRef.componentInstance.form;

        let title = form.get("title").value;
        let price = form.get("price").value;
        let discount = form.get("discount").value;
        let comment = form.get("comment").value;
        let category = form.get("category").value;
        var value = {
          price : price,
          discount : discount,
          comment : comment,
          category : category.$value,
          title : title,
          creationDate : new Date().toISOString(),
          picture : "",
          userEmail : this.authservice.currentUser.email
        }
        var offer = Offer.initialize(value);
        this.fireservice.saveOffertoDatabase(offer)
        .then(value => {
          alert(value);
        })
        .catch(error => {
          alert(error.message);
        });

      }
    });
  }

}
