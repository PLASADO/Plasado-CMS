import { Component, OnInit, NgZone } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ProposedialogComponent } from './proposedialog/proposedialog.component';

import { FireService } from '../../services/fireservice/fire.service';
import { AuthService } from '../../services/auth-service/auth.service';

import { Intention } from '../../model/intention';
import { Offer } from '../../model/offer';
@Component({
  selector: 'app-intention',
  templateUrl: './intention.component.html',
  styleUrls: ['./intention.component.scss']
})
export class IntentionComponent implements OnInit {
  intentionlist : Intention[] = [];
  proposed_intentionlist : Intention[] = [];
  notproposed_intentionlist : Intention[] = [];
  loadingIndicator = true;
  icon_all : string = "add";
  constructor(
    private fireservice : FireService, 
    private authservice : AuthService,
    public dialog: MdDialog,private zone:NgZone) { }

  ngOnInit() {
    this.getIntentionList();
  }
  getIntentionList(){
    this.fireservice.getIntentionList().subscribe(valuelist => {
      var index = 0;
      this.intentionlist = [];
      this.proposed_intentionlist = [];
      this.notproposed_intentionlist = [];
      valuelist.forEach(value => {
        var intent = Intention.initialize(value);
        intent.no = index = index + 1;
        if (intent.offers.length == 0){
          this.notproposed_intentionlist.push(intent);
        } else{
          this.proposed_intentionlist.push(intent);
        }
        this.intentionlist.push(intent);
      });
      this.intentionlist = this.intentionlist.slice();
      this.proposed_intentionlist = this.proposed_intentionlist.slice();
      this.notproposed_intentionlist = this.notproposed_intentionlist.slice();


      
    });
  }
  propose(num, tag){
    let dialogRef = this.dialog.open(ProposedialogComponent, {
      panelClass: 'col-md-3'
    });
    dialogRef.componentInstance.category = this.intentionlist[num].category;
    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel"){
      }
      if (result == "submit"){
        var offer = dialogRef.componentInstance.form.get("offer").value;
        var key = offer.key;
        var message = dialogRef.componentInstance.form.get("message").value;

        if (tag == "all"){
          this.intentionlist[num].offers.push(key);
          this.proposeOffertoIntention(this.intentionlist[num]);
        } else {
          this.notproposed_intentionlist[num].offers.push(key);
          this.proposeOffertoIntention(this.notproposed_intentionlist[num]);
        }
      }
    });
  }

  proposeOffertoIntention(intention){
    this.fireservice.proposeOffertoIntention(intention, (error) => {
      if (error) alert(error.message);
      else{
        alert("Sent successfully");
        this.getIntentionList();
      } 
    });
  }
}
